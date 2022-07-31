import { BoxProps, useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

interface ICrateProps extends BoxProps {}

export const Crate = (props: ICrateProps) => {
  const [mesh] = useBox(() => ({ mass: 1, ...props }));

  return (
    <Box ref={mesh}>
      <meshStandardMaterial color={"hotpink"} />
    </Box>
  );
};
