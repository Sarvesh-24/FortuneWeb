import { useState } from 'react';
import { IoMail, IoLockClosed, IoPerson, IoCalendar, IoMaleFemale, IoHome, IoGlobe } from 'react-icons/io5';


export default function AccessForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', dob: '', gender: '', address: '', country: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-wrap md:flex-nowrap'>
      <div className='w-full md:w-1/2 text-white flex justify-center items-center'>
        <img src='/assets/logo/Profile.webp' alt='Welcoming' className='max-w-xs md:max-w-md lg:max-w-lg'/>
      </div>
      <div className='w-full md:w-1/2 p-8'>
        <h2 className='text-xl mb-4'>Create Your Account</h2>
        <form>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='mb-2'>Name</label>
            <div className='flex items-center bg-gray-200 p-2 rounded'>
              <IoPerson className='text-gray-600' />
              <input type='text' id='name' name='name' placeholder='Your Full Name' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='mb-2'>Email</label>
            <div className='flex items-center bg-gray-200 p-2 rounded'>
              <IoMail className='text-gray-600' />
              <input type='email' id='email' name='email' placeholder='example@mail.com' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password' className='mb-2'>Password</label>
            <div className='flex items-center bg-gray-200 p-2 rounded'>
              <IoLockClosed className='text-gray-600' />
              <input type='password' id='password' name='password' placeholder='••••••••' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <button type='submit' className='w-full bg-orange-500 text-white p-3 rounded'>Create Account</button>
          <p className='mt-4'>Already have an account? <a href='/' className='text-blue-600'>Log in here</a></p>
        </form>
      </div>
    </div>
  );
}