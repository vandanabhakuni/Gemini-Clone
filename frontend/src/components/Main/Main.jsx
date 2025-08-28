import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='min-h-[100vh] flex-1 pb-[15vh] relative'>
        <div className='flex items-center justify-between  p-[20px]'>
            <p className='text-[22px] text-[#585858]'>Gemini</p>
            <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
        </div>
        <div className='max-w-[900px] m-auto '>
            <div className='my-[50px] mx-0 text-[56px] text-[#c4c7c5] font-[500] p-[20px]'>
                <p><span>Hello, Vandana.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className=''>
                <div className=''>
                    <p>Suggest beautiful places to see on an upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className=''>
                    <p>Briefly summarize this concept: Urban Planning.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className=''>
                    <p>Brainstorm team bonding activities for our work retreat.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className=''>
                    <p>Improve the readability of the following code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Main
