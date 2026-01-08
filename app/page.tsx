import React from 'react'
import Hello from './components/Hello';

const page = () => {
  console.log("This is on server side");
  return (
    <main>
      <div className='text-5xl underline'>Begin with Next js</div>
      <Hello />
    </main>
  )
}

export default page