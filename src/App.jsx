/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {

  const Makkhi = useRef()

  const [xValue, setX] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [Rotate, setRotate] = useState(0);

  const randX = gsap.utils.random(-300, 300, 100);
  const randY = gsap.utils.random(-200, 200, 100);
  const randRot = gsap.utils.random(-180, 180, 30);

  useGSAP(() => {
    gsap.to(Makkhi.current, {
      duration: 0.5,
      x: xValue,
      y: yValue,
      rotate: Rotate,
    })
  }, { scope: 'main', dependencies: [randX, randY, Rotate] })

  return (
    <div>
      <main>
        <div className={`text`}>Catch The Makhhi by Clicking on It...</div>
        <img ref={Makkhi} onClick={() => {
          setX(randX);
          setYValue(randY);
          setRotate(randRot);
        }}
        itemType='svg' src='/Makkhi.svg' alt="" />
      </main>
    </div>
  )
}

export default App
