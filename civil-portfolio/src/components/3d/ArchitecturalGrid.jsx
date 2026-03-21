import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Wireframe } from '@react-three/drei';

const ArchitecturalGrid = () => {
  const groupRef = useRef();

  // This hook ties the 3D rotation and position to the window's scroll position
  useFrame((state) => {
    const scrollY = window.scrollY;
    
    // Smoothly rotate the entire grid based on scroll depth
    groupRef.current.rotation.y = scrollY * 0.001;
    groupRef.current.rotation.x = 0.5 + scrollY * 0.0005;
    
    // Slight vertical shift for a parallax effect
    groupRef.current.position.y = -scrollY * 0.002;
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {/* Create a structured grid of pillars to represent civil engineering */}
      {[-1, 0, 1].map((x) =>
        [-1, 0, 1].map((z) => (
          <Box key={`box-${x}-${z}`} args={[0.5, 4, 0.5]} position={[x * 3, 0, z * 3]}>
            <meshStandardMaterial color="#1e3a8a" opacity={0.15} transparent depthWrite={false} />
            {/* Add a glowing wireframe to make it look structural/blueprint-like */}
            <Wireframe stroke={"#d97706"} thickness={0.02} blendFunction="add" />
          </Box>
        ))
      )}
    </group>
  );
};

export default ArchitecturalGrid;