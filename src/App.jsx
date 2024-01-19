import { useState } from 'react'
import Logo from '/face-blowing-a-kiss.svg'
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Experience from "./Experience";
import './index.css'

export default function App() {
  
  const [count, setCount] = useState(0)

 return (

  
    <Canvas 
    shadows 
    camera={{ position: [3, 3, 3], fov: 40 }}
    >
      <Environment
        files="./Environments/envmap.hdr" />
        <color 
          attach="background" 
          args={["#c1efef"]} />
      <Experience />
      <ContactShadows
          position={[0, -1.5, 0]}
          width={5}
          height={5}
          far={10}
          rotation={[0, 0, 0]}
          frames={1}
        />
    </Canvas>
  
  );
}

