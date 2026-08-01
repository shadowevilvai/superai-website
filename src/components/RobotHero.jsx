import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Robot() {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Mouse coordinates mapped to 3D space (-1 to 1)
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    // Smoothly rotate the head to follow the mouse
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, (mouseX * Math.PI) / 4, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -(mouseY * Math.PI) / 4, 0.1);
    }

    // Add a slight scanning motion to the eyes
    if (leftEyeRef.current && rightEyeRef.current) {
      const scaleBase = 1 + Math.sin(t * 5) * 0.1;
      leftEyeRef.current.scale.set(scaleBase, scaleBase, scaleBase);
      rightEyeRef.current.scale.set(scaleBase, scaleBase, scaleBase);
    }
  });

  return (
    <group>
      {/* Head Group */}
      <group ref={headRef}>
        {/* Main Head Base - Dark Glassy material */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 1.5, 2]} />
          <meshStandardMaterial 
            color="#050510" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>

        {/* Visor / Face Plate */}
        <mesh position={[0, 0.1, 1.01]}>
          <boxGeometry args={[1.6, 0.7, 0.1]} />
          <meshStandardMaterial 
            color="#0a0015" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>

        {/* Left Eye */}
        <mesh ref={leftEyeRef} position={[-0.4, 0.1, 1.07]}>
          <planeGeometry args={[0.3, 0.3]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>

        {/* Right Eye */}
        <mesh ref={rightEyeRef} position={[0.4, 0.1, 1.07]}>
          <planeGeometry args={[0.3, 0.3]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>

        {/* Antennas */}
        <mesh position={[-1.1, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#333" metalness={0.8} />
        </mesh>
        <mesh position={[1.1, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#333" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

export default function RobotHero() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Premium Studio Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#7000FF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00F0FF" />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" castShadow />
        
        {/* Environment Map for Glassy Reflections */}
        <Environment preset="city" />

        {/* Floating Robot */}
        <Float
          speed={2} // Animation speed
          rotationIntensity={0.5} // XYZ rotation intensity
          floatIntensity={2} // Up/down float intensity
          floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within
        >
          <Robot />
        </Float>

        {/* Dynamic Shadow underneath */}
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4} 
          color="#00F0FF" 
        />
      </Canvas>
    </div>
  );
}
