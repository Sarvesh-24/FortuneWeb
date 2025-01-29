import { useState } from 'react';
import { IoMail, IoLockClosed, IoPerson } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function AccessForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col md:flex-row h-screen bg-gray-100'>
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='w-full md:w-1/2 flex justify-center items-center p-6'
      >
        <img src='/assets/logo/Profile.webp' alt='Welcome' className='max-w-xs md:max-w-md lg:max-w-lg' />
      </motion.div>
      
      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='w-full md:w-1/2 flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg'
      >
        <h2 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>Create Your Account</h2>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-700 font-medium mb-1'>Name</label>
            <div className='flex items-center bg-gray-200 p-3 rounded-lg'>
              <IoPerson className='text-gray-600' />
              <input type='text' id='name' name='name' placeholder='Your Full Name' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
            <div className='flex items-center bg-gray-200 p-3 rounded-lg'>
              <IoMail className='text-gray-600' />
              <input type='email' id='email' name='email' placeholder='example@mail.com' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>Password</label>
            <div className='flex items-center bg-gray-200 p-3 rounded-lg'>
              <IoLockClosed className='text-gray-600' />
              <input type='password' id='password' name='password' placeholder='••••••••' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit' 
            className='w-full bg-blue-600 text-white font-medium p-3 rounded-lg shadow-md'>
            Create Account
          </motion.button>
          <p className='mt-4 text-center'>Already have an account? <a href='/' className='text-blue-600 font-medium'>Log in here</a></p>
        </form>
      </motion.div>
    </div>
  );
}
