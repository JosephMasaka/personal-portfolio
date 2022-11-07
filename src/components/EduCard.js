import React from 'react'

export const EduCard = ({year, institution, text}) => {
  return (
    <div className='flex'>
        <div className='inline-left'>
            <h5>{year}</h5>
        </div>
        <div className='inline-right'>
            <h5>{institution}</h5>
            <p>{text}</p>
         </div>
    </div>
  )
}

