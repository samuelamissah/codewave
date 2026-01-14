'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Loading fallback component
function LoadingFallback() {
  return null; // Or return a simple loader if needed
}

// Memoized WaveGeometry component
function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use useMemo to prevent recreation on every render
  const geometry = useMemo(() => new THREE.PlaneGeometry(8, 3, 128, 64), []);
  
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#3A8DFF',
    wireframe: true,
    transparent: true,
    opacity: 0.8,
    emissive: '#3A8DFF',
    emissiveIntensity: 0.2,
    roughness: 0.8,
    metalness: 0.2,
  }), []);

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} rotation={[0.5, 0.2, 0]}>
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3A8DFF" />
      <ambientLight intensity={0.5} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        className="h-full w-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <Suspense fallback={null}>
          <WaveGeometry />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <fog attach="fog" args={['#0A0A0F', 5, 15]} />
        </Suspense>
      </Canvas>
    </div>
  );
}