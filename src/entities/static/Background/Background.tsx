import { PlaneProps, Triplet, usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface IBackgroundProps extends PlaneProps {
  args?: [width: number, height: number];
}

const defaultProps: IBackgroundProps = {
  args: [1000, 1000],
};

export const Background = (props: IBackgroundProps) => {
  const actualProps = {
    ...defaultProps,
    ...props,
  };

  const [ref, api] = usePlane(() => actualProps);

  useFrame(() => {
    api.position.set(0, 0, -3);
  });

  return (
    <Plane ref={ref} args={actualProps.args}>
      <meshStandardMaterial color={"blue"} />
    </Plane>
  );
};
