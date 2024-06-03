import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <div className="">
                <video
                    className="w-screen object-cover fixed -z-10 top-0 md:aspect-video block h-screen"
                    src="../src/assets/video/NightCityBackground.mp4"
              autoPlay
                    muted
                    loop
                ></video>
                <div className="h-screen overflow-hidden bg-black/30">
                    <Outlet />
                </div>

            </div>
        </>
    )
}

export default MainLayout