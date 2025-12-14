import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Header from "../components/Header";

// function HeroScene() {
//   return (
//     <>
//       <Stars radius={100} depth={50} count={5000} factor={4} fade />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//     </>
//   );
// }

export default function Home() {
  return (
    
    // <div className="h-screen w-screen bg-black">
    //   <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
    //     <HeroScene />
    //     <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    //   </Canvas>
    

      <div className="absolute inset-0 flex flex-col mx-8 px-4 items-start justify-center text-center text-white">
        <h1 className="text-5xl text-teal-400 md:text-7xl font-serif font-bold drop-shadow-lg">
          Sahyog 
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500 drop-shadow-md">
          Exchange skills. Learn. Grow together.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/explore"
            className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition"
          >
            Explore
          </a>
          <a
            href="/skills"
            className="px-6 py-2 rounded-xl bg-pink-500 hover:bg-pink-400 transition"
          >
            My Skills
          </a>
        </div>
      </div>
    // </div>
  );
}
