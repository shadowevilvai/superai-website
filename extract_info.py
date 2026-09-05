import os
import glob
import docx
import fitz  # PyMuPDF
from zipfile import ZipFile

def extract_from_docx(file_path, output_dir, text_file):
    try:
        doc = docx.Document(file_path)
        text_file.write(f"--- TEXT FROM {os.path.basename(file_path)} ---\n")
        for para in doc.paragraphs:
            if para.text.strip():
                text_file.write(para.text + "\n")
        
        # Extract images from the docx file (which is a zip archive)
        with ZipFile(file_path, 'r') as zip_ref:
            for item in zip_ref.namelist():
                if item.startswith('word/media/'):
                    zip_ref.extract(item, output_dir)
                    # Rename the extracted file to include the document name
                    orig_path = os.path.join(output_dir, item)
                    new_name = f"{os.path.splitext(os.path.basename(file_path))[0]}_{os.path.basename(item)}"
                    new_path = os.path.join(output_dir, new_name)
                    os.rename(orig_path, new_path)
    except Exception as e:
        text_file.write(f"Error extracting {file_path}: {e}\n")

def extract_from_pdf(file_path, output_dir, text_file):
    try:
        doc = fitz.open(file_path)
        text_file.write(f"--- TEXT FROM {os.path.basename(file_path)} ---\n")
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text_file.write(page.get_text("text"))
            
            # Extract images
            image_list = page.get_images(full=True)
            for image_index, img in enumerate(image_list, start=1):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_name = f"{os.path.splitext(os.path.basename(file_path))[0]}_page{page_num+1}_img{image_index}.{image_ext}"
                with open(os.path.join(output_dir, image_name), "wb") as f:
                    f.write(image_bytes)
    except Exception as e:
        text_file.write(f"Error extracting {file_path}: {e}\n")

def main():
    base_dir = r"c:\Users\ADMIN\OneDrive\Desktop\superai\reports of all kind"
    sem_wise_dir = os.path.join(base_dir, "Sem Wise Reports")
    output_dir = r"c:\Users\ADMIN\OneDrive\Desktop\superai\extracted_media"
    
    os.makedirs(output_dir, exist_ok=True)
    
    text_file_path = r"c:\Users\ADMIN\OneDrive\Desktop\superai\extracted_text.txt"
    
    with open(text_file_path, "w", encoding="utf-8") as text_file:
        # Get all files
        docx_files = glob.glob(os.path.join(sem_wise_dir, "*.docx")) + glob.glob(os.path.join(base_dir, "*.docx"))
        pdf_files = glob.glob(os.path.join(sem_wise_dir, "*.pdf")) + glob.glob(os.path.join(base_dir, "*.pdf"))
        
        for file in docx_files:
            extract_from_docx(file, output_dir, text_file)
            
        for file in pdf_files:
            extract_from_pdf(file, output_dir, text_file)
            
if __name__ == '__main__':
    main()
