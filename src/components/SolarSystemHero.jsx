import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Planet Component
function Planet({ radius, speed, letter, startAngle, color }) {
  const groupRef = useRef();
  const planetRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Revolve around sun
    const angle = startAngle + t * speed;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z);
    }
    
    // Rotate on its own axis
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.02;
      planetRef.current.rotation.x += 0.01;
    }
  });

  return (
    <>
      {/* Orbit Trail */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>

      {/* Planet Group */}
      <group ref={groupRef}>
        <Float speed={3} floatIntensity={0.3} rotationIntensity={0.2}>
          <mesh ref={planetRef}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial 
              color={color} 
              metalness={0.8} 
              roughness={0.2} 
              emissive={color}
              emissiveIntensity={0.4}
            />
          </mesh>
          
        </Float>
      </group>
    </>
  );
}

// Sun Component
function Sun() {
  const sunRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
      const scale = 1 + Math.sin(t * 2) * 0.03;
      sunRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={sunRef}>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial 
          color="#050510" 
          emissive="#7000FF" 
          emissiveIntensity={0.3}
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>
      {/* Wireframe overlay for techy look */}
      <mesh>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function SolarSystem() {
  const systemRef = useRef();

  useFrame((state) => {
    // Mouse coordinates mapped to 3D space (-1 to 1)
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    // Smoothly tilt the entire solar system based on mouse
    if (systemRef.current) {
      systemRef.current.rotation.y = THREE.MathUtils.lerp(systemRef.current.rotation.y, (mouseX * Math.PI) / 8, 0.05);
      systemRef.current.rotation.x = THREE.MathUtils.lerp(systemRef.current.rotation.x, (mouseY * Math.PI) / 8 + 0.2, 0.05);
    }
  });

  const planets = [
    { letter: 'R', radius: 2.2, speed: 0.6, color: '#00F0FF' },
    { letter: 'A', radius: 2.9, speed: 0.5, color: '#7000FF' },
    { letter: 'P', radius: 3.6, speed: 0.4, color: '#FF0055' },
    { letter: 'I', radius: 4.3, speed: 0.3, color: '#00FF88' },
    { letter: 'D', radius: 5.0, speed: 0.2, color: '#FFD700' },
  ];

  return (
    <group ref={systemRef} rotation={[0.2, 0, 0]}>
      <Sun />
      {planets.map((p, i) => (
        <Planet 
          key={p.letter}
          letter={p.letter}
          radius={p.radius}
          speed={p.speed}
          color={p.color}
          startAngle={(i * Math.PI * 2) / 5}
        />
      ))}
    </group>
  );
}

export default function SolarSystemHero() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90 pointer-events-auto">
      <Canvas camera={{ position: [0, 2.5, 9.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#7000FF" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#00F0FF" />
        <spotLight position={[0, 5, 5]} angle={0.5} penumbra={1} intensity={2} color="#ffffff" castShadow />
        
        <Environment preset="city" />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <SolarSystem />
        </Float>
      </Canvas>
    </div>
  );
}
