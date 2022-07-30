import { Triplet, useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

interface IGroundProps {
    args?: Triplet,

}

export const Ground = (props: IGroundProps) => {
    const { args = [1000, 0, 3] } = props
    const [ref, api] = useBox(() => ({ args }))

    useFrame(() => {
        api.position.set(0, -3, 0)
    })

    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={args} />
            <meshStandardMaterial color={'green'} />
        </mesh>
    );
}