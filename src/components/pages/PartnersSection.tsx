import React from 'react'


const partners = ["Husky", "Yolo Dev", "Alex Villas", "Hidden Ubud", "Uluwatu Vil", "Yabica"]

const PartnersSection = () => {
  return (
    <div className='w-full p-28 flex flex-col bg-white'>
      <div className='flex justify-between items-center'>
        <h1 className='text-5xl text-black'>Partners</h1>
        <p className='text-gray-500 text-xl'>We Believe that collaboration is key to building a sustainable future. <br /> Our investors and partners play a crucial role in driving our mission forward. </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-28'>
        {partners?.map((e, i) => {
          return (
            <div className='border p-4 rounded-xl' key={i}>
              <p className='text-center text-base text-black'>{e}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default PartnersSection