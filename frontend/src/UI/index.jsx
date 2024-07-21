import React from 'react'

const Bar = ({score, name, color1, color2}) => {
  return (
    <div className='mt-2 flex justify-between items-center'>
        <span>{name}</span>

        <div className={`border-2 rounded-lg w-[60%]`} style={{borderColor:color1}}>
           
            <div className={`rounded-l-md p-1`}
             style={{backgroundColor: color2, width: score}}>

              <span className='text-center w-full'> {score}% </span>  
            </div>
            
        </div>
    </div>
  )
}

export default Bar