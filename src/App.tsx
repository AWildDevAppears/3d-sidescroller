import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { DemoScene } from './scenes/DemoScene/DemoScene';

function App() {
  const wrapperStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={wrapperStyle}>
      <Canvas>
        <Physics
          gravity={[0, -26, 0]} 
          defaultContactMaterial={{ restitution: 0.6 }}
        >        
          <DemoScene />
        </Physics>
      </Canvas>
    </div>

  );
}

export default App;
