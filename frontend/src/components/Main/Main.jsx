import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='min-h-[100vh] flex-1 pb-[15vh] relative'>
        <div className='flex items-center justify-between  p-[20px]'>
            <p className='text-[22px] text-[#585858]'>Gemini</p>
            <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
        </div>
        <div className='max-w-[900px] m-auto'>
            <div className='my-[50px] mx-0 text-[56px] text-[#c4c7c5] font-[500] p-[20px]'>
                <p><span className='bg-gradient-to-tr from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>Hello, Vandana.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px] my-[50px]'>
                <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-[17px]'>Suggest beautiful places to see on an upcoming road trip.</p>
                    <img className='w-[35px] p-[5px] absolute bg-[#ffffff] rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
                </div>
                <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-[17px]'>Briefly summarize this concept: Urban Planning.</p>
                    <img className='w-[35px] p-[5px] absolute bg-[#ffffff] rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />
                </div>
                <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-[17px]'>Brainstorm team bonding activities for our work retreat.</p>
                    <img className='w-[35px] p-[5px] absolute bg-[#ffffff] rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon} alt="" />
                </div>
                <div className='h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                    <p className='text-[#585858] text-[17px]'>Improve the readability of the following code.</p>
                    <img className='w-[35px] p-[5px] absolute bg-[#ffffff] rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="absolute bottom-0 w-[100%] max-w-[900px] py-0 px-[20px] m-auto">
                <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
                    <input className='flex-1 bg-transparent border-0 outline-none p-[8px] text-[18px]' type="text" placeholder='Enter a prompt here'/>
                    <div className='flex items-center gap-[15px]'>
                        <img className='w-[24px] cursor-pointer' src={assets.gallery_icon} alt="" />
                        <img className='w-[24px] cursor-pointer' src={assets.mic_icon} alt="" />
                        <img className='w-[24px] cursor-pointer' src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="text-[13px] my-[15px] mx-auto text-center font-[300]">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
