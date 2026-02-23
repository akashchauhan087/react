import React from 'react'

const Form = () => {

  const [fname, setFname] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by", fname, "who is", age, "year(s) old");
    setFname('');
    setAge('');
  }
  return (
    <div>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col gap-4'>
        <input type='text' onChange={(e)=>{setFname(e.target.value)}} value={fname} placeholder='Enter your Name' className='border-2 h-12' />
        <input type='number' onChange={(e)=>{setAge(e.target.value)}} value={age} placeholder='Enter your Age' className='border-2 h-12' />
        <textarea placeholder='Enter details:' className='border-2 h-12' />
        <button className='bg-green-200 rounded-xl border-2 h-12 w-30'> Submit</button>
      </form>
    </div>
  )
}

export default Form;
