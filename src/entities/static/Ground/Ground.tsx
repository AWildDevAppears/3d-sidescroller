import { BoxProps, PlaneProps, useBox, usePlane } from "@react-three/cannon";
import { Box, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface IGroundProps extends BoxProps {}

const defaultProps: IGroundProps = {
  args: [1000, 40, 4],
  rotation: [Math.PI / 2, 0, 0],
  position: [0, -5, 0],
};

export const Ground = (props: IGroundProps) => {
  const actualProps = {
    ...defaultProps,
    ...props,
  };

  const [ref] = useBox(() => actualProps);

  return (
    <Box ref={ref} args={actualProps.args} position={actualProps.position}>
      <meshStandardMaterial color={"green"} />
    </Box>
  );
};
