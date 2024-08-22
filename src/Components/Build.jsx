import React from 'react'
import build from '../assets/build.png'
import buildbg from '../assets/buildbg.png'
const Build = () => {
  return (
      <>
          <div className='mx-[160px]  '>
              <div className='my-[60px]   '>
                  <img src= {build} alt="Image for build page." />
              </div>
              <div className='mb-[60px]  '>
                  <img src= {buildbg} alt="Image for build page." />
              </div>
          </div>
      </>
  )
}

export default Build