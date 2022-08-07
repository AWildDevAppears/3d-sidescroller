import { BoxProps, useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { COLLISION_GROUPS } from "../../../constants/Physics";

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
    collisionFilterGroup: COLLISION_GROUPS.FLOOR,
  };

  const [ref] = useBox(() => actualProps);

  return (
    <Box ref={ref} args={actualProps.args} position={actualProps.position}>
      <meshStandardMaterial color={"green"} />
    </Box>
  );
};
