import { Box } from "@react-three/drei";
import { Crate } from "../../entities/interactive/Crate/Crate";
import { Player } from "../../entities/pawns/Player/Player";
import { Background } from "../../entities/static/Background/Background";
import { Ground } from "../../entities/static/Ground/Ground";

interface IDemoSceneProps {}

export const DemoScene = (props: IDemoSceneProps) => {
  return (
    <>
      {" "}
      {/* Scene wrapper? */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Player position={[0, -2.4, 0]} />
      <Crate position={[0, 0, 0]} />
      <Ground />
      <Background />
    </>
  );
};
