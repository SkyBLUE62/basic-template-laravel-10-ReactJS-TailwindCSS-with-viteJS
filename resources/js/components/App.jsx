import React from 'react'

const App = () => {
    return (
        <div className='flex flex-col h-screen justify-between bg-[#171923]'>
            <div className="flex items-center justify-center flex-grow">
                <div className="text-center flex flex-col space-y-4">
                    <h1 className="text-6xl font-bold text-[#e7e8f2]">Welcome to</h1>
                    <h2 className='text-3xl  text-[#e7e8f2]'>Laravel 10, ReactJS 18, TailwindCSS, ViteJS <br /> <span className='font-bold'> Template</span></h2>
                    <span className='text-sm  text-[#e7e8f2]'>In order to obtain more information, please refer to the readme file.</span>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <span className='text-lg font-bold text-[#e7e8f2]'>Created by Thomas A.</span>
            </div>
        </div>
    )
}

export default App
