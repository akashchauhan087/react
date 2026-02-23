import { useState } from 'react';

const App = () => {
  const [fname, setFname] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by", fname, "who is", age, "year(s) old");
    setFname('');
    setAge('');
  }

  return (
    <div className='flex gap-5 w-100% h-screen p-5'>
      <div className='w-1/2 rounded-2xl p-10'>
        <h1 className='text-3xl font-bold'>Enter your Query:</h1>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col gap-4 items-start pt-5'>
          <input
            type='text'
            className='px-3 border-2 h-12 w-full'
            onChange={(e)=>{setFname(e.target.value)}}
            value={fname}
            placeholder='Enter your Name'
          />
          <input
            type='number'
            className='px-3 border-2 h-12 w-full'
            onChange={(e)=>{setAge(e.target.value)}}
            value={age} placeholder='Enter your Age'
          />
          <textarea
            placeholder='Enter details:'
            className='p-3 border-2 h-40 w-1/2'
          />
          <button className='bg-green-600 rounded-xl border-2 h-12 w-30'> Submit</button>
        </form>
      </div>
      <div className='p-10 w-1/2 rounded-2xl'>
        <h1 className='text-3xl font-bold pb-5'>Form preview:</h1>
        <div id='form-preview' className='flex gap-5 flex-wrap h-full overflow-auto'>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
          <div className='h-50 w-45 rounded-2xl bg-green-100'></div>
        </div>
      </div>
    </div>
  )
}

export default App
