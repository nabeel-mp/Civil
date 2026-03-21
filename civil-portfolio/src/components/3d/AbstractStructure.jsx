import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

const AbstractStructure = () => {
  const meshRef = useRef();

  // Rotates based on time + window scroll for interactivity
  useFrame((state, delta) => {
    const scrollY = window.scrollY;
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
    
    // The structure slowly rises and twists as you scroll down
    meshRef.current.position.y = scrollY * 0.002;
    meshRef.current.rotation.z = scrollY * 0.001;
  });

  return (
    <Icosahedron ref={meshRef} args={[3, 2]} scale={1.2} position={[2, 0, -2]}>
      {/* Stark black wireframe for the off-white theme */}
      <MeshDistortMaterial 
        color="#000000" 
        wireframe={true}
        distort={0.3} 
        speed={1.5} 
        transparent={true}
        opacity={0.3}
      />
    </Icosahedron>
  );
};

export default AbstractStructure;