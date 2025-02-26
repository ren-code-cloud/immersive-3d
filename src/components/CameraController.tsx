import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

const CameraController: React.FC = () => {
  const { camera, gl } = useThree();

  return <OrbitControls camera={camera} domElement={gl.domElement} />;
};

export default CameraController;
