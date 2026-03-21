import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

const AbstractStructure = () => {
  const meshRef = useRef();

  // Rotates the 3D object every frame for that "always alive" feel
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]} scale={1.5}>
      <MeshDistortMaterial 
        color="#4b5563" // Dark grey
        wireframe={true}
        distort={0.4} 
        speed={2} 
      />
    </Icosahedron>
  );
};

export default AbstractStructure;