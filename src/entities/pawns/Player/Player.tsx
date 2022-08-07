import {
  BoxProps,
  CollideEndEvent,
  CollideEvent,
  Triplet,
  useBox,
} from "@react-three/cannon";
import { Box, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { COLLISION_GROUPS } from "../../../constants/Physics";
import { useKeyboardInput } from "../../../hooks/UseKeyboardInput";

interface IPlayerProps extends BoxProps {
  position: Triplet;
}

export const Player = (props: IPlayerProps) => {
  const [mesh, api] = useBox(() => ({
    ...props,
    mass: 1,
    collisionFilterGroup: COLLISION_GROUPS.PLAYER,
    angularDamping: 1,
  }));

  const [floorChecker, floorAPI] = useBox(() => ({
    collisionFilterMask: COLLISION_GROUPS.FLOOR,
    mass: 1,
    onCollide: onFloorCollision,
    position: [0, 0, 0],
  }));
  const isJumping = useRef(false);

  const { left, right, jump } = useKeyboardInput();
  const velocity = useRef([0, 0, 0]);

  const moveSpeed = 2;
  const jumpHeight = 10;

  const onFloorCollision = (evt: CollideEvent) => {
    console.log("Collided with floor");
  };

  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame(() => {
    const direction = new Vector3();
    direction.set(Number(right) - Number(left), 0, 0);

    const canJump = !isJumping.current;

    api.velocity.set(
      direction.x * moveSpeed,
      jump && canJump ? jumpHeight : velocity.current[1],
      direction.z
    );

    if (jump) isJumping.current = true;
  });

  return (
    <Box ref={mesh}>
      <PerspectiveCamera makeDefault={true} position={[0, Math.PI / 2, 10]} />
      <meshStandardMaterial color={"orange"} />

      <Box
        ref={floorChecker}
        // visible={false}
        args={[1, 0.1, 1]}
      />
    </Box>
  );
};
