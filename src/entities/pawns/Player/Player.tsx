import { BoxProps, Triplet, useBox } from "@react-three/cannon";
import { Box, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { useKeyboardInput } from "../../../hooks/UseKeyboardInput";

interface IPlayerProps extends BoxProps {
  position: Triplet,
}

export const Player = (props: IPlayerProps) => {
  const [mesh, api] = useBox(() => ({ ...props }));
  const { left, right } = useKeyboardInput();
  const [currentPosition, setCurrentPosition] = useState({ 
    x: 0,
    y: 0,
    z: 0,
  });

  const moveSpeed = 0.3;

  useEffect(() => {
    setCurrentPosition({
      x: props.position[0],
      y: props.position[1],
      z: props.position[2],
    })
  }, []);

  useFrame(() => {
    if ( left || right ) {
      setCurrentPosition({
        ...currentPosition,
        x: left ? currentPosition.x -= moveSpeed : currentPosition.x += moveSpeed
      });
      api.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
    }
  });

  return (
    <Box ref={mesh}>
      <PerspectiveCamera makeDefault={true} position={[0, Math.PI / 2, 10]} />
      <meshStandardMaterial color={"orange"} />
    </Box>
  );
};
