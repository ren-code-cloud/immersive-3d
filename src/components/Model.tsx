import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { ModelProps } from "../library/utils";

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      position={[0, -2, 0]}
      scale={[1.5, 1.5, 1.5]}
    />
  );
};

export default Model;
