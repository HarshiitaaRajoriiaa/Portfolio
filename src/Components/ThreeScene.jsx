import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float
      speed={5}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.15}>
        <MeshDistortMaterial
          color="#2563eb"
          roughness={0.2}
          metalness={0.85}
          distort={0.35}
          speed={3}
        />
      </Sphere>
    </Float>
  );
}

function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 3, 5]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 4]}
          intensity={1.5}
        />

        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

export default ThreeScene;