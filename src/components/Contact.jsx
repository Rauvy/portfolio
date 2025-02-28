import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='bg-green-800'>
      <div className="flex justify-center align-center flex-wrap mb-10">
        <div className="text-9xl w-full">LET'S</div>
        <div className="text-9xl">CONNECT</div>
      </div>
      <div className='mx-24'>
        <h2 className='text-4xl mb-2'><a href="/">reginayakubiv@gmail.com</a></h2>
        <p>Click to copy</p>
      </div>
      <div className='w-3/5 flex justify-end pr-10 ml-auto'>
        <ContactForm />
      </div>
      <div className='flex justify-between w-1/3 gap-1 mx-2'>
        <div>Twitter</div>
        <div>Insta</div>
        <div>GitHub</div>
      </div>
    </div>
  )
}

export default Contact
