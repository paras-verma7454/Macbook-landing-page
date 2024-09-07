import { Canvas } from "@react-three/fiber"
import "./Style.css"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import Macbook from "./components/Macbook"


function App() {

  return( 
    <div className="w-full h-screen font-mono">
      <div className="navbar  line flex gap-10  pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
      {["Iphone","Ipad","services","ios","macbook","Ipod","products","Help"].map(e=> <a href="" className="text-white  text-sm " >{e}</a>)}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2  ">
        <h3 className=" masked text-6xl tracking-tighter font-black">Macbook Pro</h3>
        <h5>Oh so pro !</h5>
      <p className="text-center w-2/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, aspernatur iure. Libero, corporis facere!</p>
      </div>
    <Canvas camera={{fov:12, position:[0,-12,250]} }>
    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}/>
    <ScrollControls>
      <Macbook/>
      </ScrollControls>
    </Canvas>
    </div>
  )
  
  
}

export default App
