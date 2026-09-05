import re
import os
import glob
import json
import shutil

def main():
    text_path = r"c:\Users\ADMIN\OneDrive\Desktop\superai\extracted_text.txt"
    media_dir = r"c:\Users\ADMIN\OneDrive\Desktop\superai\extracted_media"
    assets_dir = r"c:\Users\ADMIN\OneDrive\Desktop\superai\src\assets\events"
    events_json_path = r"c:\Users\ADMIN\OneDrive\Desktop\superai\src\data\events.json"
    
    os.makedirs(assets_dir, exist_ok=True)
    
    with open(text_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    events = []
    current_event = None
    current_doc = None
    capture_desc = False
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        if line.startswith("--- TEXT FROM"):
            current_doc = line.replace("--- TEXT FROM ", "").replace(" ---", "")
            current_doc = os.path.splitext(current_doc)[0] # Remove extension
            continue
            
        # Detect Activity
        if line.startswith("Activity "):
            if current_event:
                events.append(current_event)
                
            title = line.split(":", 1)
            title = title[1].strip() if len(title) > 1 else line
            
            current_event = {
                "id": len(events) + 1,
                "title": title,
                "date": "TBD",
                "time": "",
                "description": "",
                "image": "",
                "doc_ref": current_doc
            }
            capture_desc = False
            continue
            
        if current_event:
            # Handle Date parsing safely
            if line.startswith("Date:"):
                parts = line.split(":", 1)
                if len(parts) > 1:
                    current_event["date"] = parts[1].strip()
            elif line.startswith("Date -"):
                parts = line.split("-", 1)
                if len(parts) > 1:
                    current_event["date"] = parts[1].strip()
            elif line.startswith("Time:") or line.startswith("Time -"):
                pass
            elif line.startswith("Description:"):
                capture_desc = True
            elif capture_desc:
                if line.startswith("Participation Analysis:") or line.startswith("Activity Photo:") or line.startswith("Outcome:") or line.startswith("PO Attained:") or line.startswith("Objectives:"):
                    capture_desc = False
                else:
                    if not current_event["description"]:
                        current_event["description"] = line
                    else:
                        current_event["description"] += " " + line

    if current_event:
        events.append(current_event)
        
    used_images = set()
    all_images = glob.glob(os.path.join(media_dir, "*.*"))
    
    for event in events:
        doc_ref = event.get("doc_ref")
        if doc_ref:
            matching_images = [img for img in all_images if os.path.basename(img).startswith(doc_ref) and img not in used_images]
            if matching_images:
                matching_images.sort(key=lambda x: os.path.getsize(x), reverse=True)
                selected_image = matching_images[0]
                used_images.add(selected_image)
                
                ext = os.path.splitext(selected_image)[1]
                new_img_name = f"event_{event['id']}{ext}"
                dest_path = os.path.join(assets_dir, new_img_name)
                shutil.copy(selected_image, dest_path)
                
                event["image"] = f"../assets/events/{new_img_name}" # Adjusted path for dynamic import if needed, but better to use direct path
            else:
                event["image"] = ""
                
    try:
        with open(events_json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if not isinstance(data, list):
                data = []
    except Exception:
        data = []
        
    # Filter out old 'past' events if we want to replace them, or just append
    data = [e for e in data if e.get("type") != "past"]
    
    for e in events:
        desc = e["description"].strip()
        if not desc:
            desc = "Event details and information to be updated soon."
            
        if len(desc) > 300:
            desc = desc[:297] + "..."
            
        data.append({
            "id": f"evt-past-{e['id']}",
            "title": e["title"],
            "date": e["date"],
            "type": "past",
            "description": desc,
            "link": "#",
            "image": e["image"] if e["image"] else "https://via.placeholder.com/600x400"
        })
        
    with open(events_json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    print(f"Successfully processed {len(events)} events.")

if __name__ == '__main__':
    main()
