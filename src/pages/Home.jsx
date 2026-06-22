import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'

const Home = () => {
  return (
    <main className='py-10 px-6 pb-20 md:px-4 flex flex-col justify-center items-center'>
      <Header title={
          <>
            Your Journey to Coding Conf <br className="hidden md:block"/> 2025 Starts Here!
          </>
        }
        des="Secure you spot at next year's biggest coding conference."  
      />     
      
      <Form/>
    </main>
  )
}

export default Home
