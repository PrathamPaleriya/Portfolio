import React from 'react'

function CircleAnimation() {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen">
        <div className="w-[440px] h-[440px] top-[20%] bg-pblue left-[25%] rounded-full absolute blur-[120px] animate-circle-blue-bg scale-20"></div>
        <div className="w-[440px] h-[440px] bg-ppink right-[25%] top-[20%]rounded-full absolute blur-[120px] animate-circle-pink-bg scale-20"></div>
        <div className="w-[440px] h-[440px] bg-plime/50 left-[25%] bottom-[5%] rounded-full absolute blur-[120px] animate-circle-lime-bg scale-10"></div>
        <div className="w-[440px] h-[440px] bg-ppurple/60 right-[25%] top-[40%] buttom-[5%] rounded-full absolute blur-[120px] animate-circle-purple-bg"></div>  
    </div>
  )
}

export default CircleAnimation
