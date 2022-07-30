import { useBox } from "@react-three/cannon";
import { MeshProps } from "@react-three/fiber";

interface IPlayerProps extends MeshProps {

}

export const Player = (props: IPlayerProps) => {
    const [mesh, api] = useBox(() => ({  args: [1, 1, 1], mass: 1, ...props }));

    return (
        <orthographicCamera>
           <mesh
                {...props}
                ref={mesh}
                scale={1}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'orange'} />
            </mesh>
        </orthographicCamera>
 
        

    );
}