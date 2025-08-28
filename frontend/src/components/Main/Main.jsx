import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='min-h-[100vh] flex-1 pb-[15vh] relative'>
        <div className='flex items-center justify-between  p-[20px]'>
            <p className='font-[22px] font-[#585858]'>Gemini</p>
            <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
        </div>
        <div className=''>
            <div className=''>
                <p><span>Hello, Vandana.</span></p>
                <p>How can I help you today?</p>
            </div>
        </div>
      
    </div>
  )
}

export default Main
