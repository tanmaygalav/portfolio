import React, { useRef } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Icosahedron, Stars } from '@react-three/drei';
import { MeshStandardMaterial, AmbientLight, PointLight } from 'three';
import type { Mesh } from 'three';

// Explicitly extend R3F to include THREE.js components.
// This resolves TypeScript errors where JSX tags are not recognized.
extend({ MeshStandardMaterial, AmbientLight, PointLight });

const Rig: React.FC = () => {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
};


const AnimatedShape: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]} scale={1.2}>
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe 
        roughness={0.5}
        metalness={0.1}
      />
    </Icosahedron>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="white" intensity={1}/>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <AnimatedShape />
      <Rig />
    </Canvas>
  );
};

export default ThreeScene;