import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import grass from "../assets/floor.jpg";
import * as THREE from "three";
import CameraController from "./CameraController";
import Model from "./Model";

const ModelViewer: React.FC = () => {
  const modelUrl = "/models/ramennoodle_food_stall.glb";
  const texture = useLoader(THREE.TextureLoader, grass);

  const gridWidth = 5;
  const gridHeight = 5;

  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Environment preset="city" />

      <CameraController />

      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[gridWidth, gridHeight]} />
        <meshStandardMaterial side={THREE.DoubleSide} map={texture} />
      </mesh>

      <Suspense
        fallback={
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        }
      >
        <Model url={modelUrl} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
