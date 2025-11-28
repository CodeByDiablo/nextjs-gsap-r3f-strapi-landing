"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

type Node = {
  position: [number, number, number];
  size: number;
};

function Nodes() {
  const nodes = useMemo<Node[]>(() => {
    const arr: Node[] = [];
    // 4 bigger nodes (seniors)
    for (let i = 0; i < 4; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        ],
        size: 0.2 + Math.random() * 0.15,
      });
    }
    // 10 smaller nodes (juniors)
    for (let i = 0; i < 10; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
        ],
        size: 0.08 + Math.random() * 0.08,
      });
    }
    return arr;
  }, []);

  return (
    <>
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <sphereGeometry args={[node.size, 24, 24]} />
          <meshStandardMaterial
            emissive={idx < 4 ? new THREE.Color("#00ffc6") : new THREE.Color("#ff3b81")}
            emissiveIntensity={1.5}
            color={"#05060a"}
          />
        </mesh>
      ))}
    </>
  );
}

function Connections() {
  const lines = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 12; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        )
      );
    }
    return pts;
  }, []);

  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(lines),
    [lines]
  );

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={"#8b8bfd"} linewidth={1} />
    </lineSegments>
  );
}

export const GlowingNetwork = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#05060a"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <group rotation={[0.3, 0.6, 0]}>
        <Nodes />
        <Connections />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
};
