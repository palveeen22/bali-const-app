import React from 'react'

const BenefitsSection = () => {
  return (
    <div className='h-screen p-28 bg-white'>
        <div className='rounded-xl bg-cgreen p-14 flex flex-col justify-between gap-4'>
            <h3 className='text-4xl text-black text-center font-semibold'>Our Main Benefits</h3>
            <p className='text-gray-500 text-xl text-center'>We offer innovative solutions that not only enchance enviromental <br/> sustainability but also drive economic efficiency</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'></div>
        </div>
    </div>
  )
}

export default BenefitsSection