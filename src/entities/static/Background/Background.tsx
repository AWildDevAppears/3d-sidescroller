import { Triplet, useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

interface IBackgroundProps {
    args?: Triplet,

}

export const Background = (props: IBackgroundProps) => {
    const { args = [1000, 100, 1] } = props
    const [ref, api] = useBox(() => ({ args }))

    useFrame(() => {
        api.position.set(0, 0, -3)
    })

    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={args} />
            <meshStandardMaterial color={'blue'} />
        </mesh>
    );
}