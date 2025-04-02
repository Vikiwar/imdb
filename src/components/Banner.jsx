import React from 'react'

const Banner = () => {
  return (
    <div 
    className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end
    ' style={{backgroundImage: `url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e)`}}>

        <div className='text-white w-full text-center text-2xl'>
            placeholder movie
        </div>
    </div>
  )
}

export default Banner