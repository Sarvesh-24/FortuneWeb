import { useState } from 'react';
import { IoMail } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function AccessForm() {
  const [formData, setFormData] = useState({
    email: '',
    subscriptionType: 'NEW',
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
        <img src='/assets/logo/Profile.webp' alt='Welcome' className='max-w-xs md:max-w-md lg:max-w-lg rounded-lg' />
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
            <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
            <div className='flex items-center bg-gray-200 p-3 rounded-lg'>
              <IoMail className='text-gray-600' />
              <input type='email' id='email' name='email' placeholder='example@mail.com' className='w-full bg-transparent p-2 outline-none' onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-1'>Subscription Type</label>
            <div className='flex flex-col gap-2'>
              <label className='flex items-center gap-2'>
                <input type='radio' name='subscriptionType' value='NEW' checked={formData.subscriptionType === 'NEW'} onChange={handleChange} />
                NEW
              </label>
              <label className='flex items-center gap-2'>
                <input type='radio' name='subscriptionType' value='RENEW' checked={formData.subscriptionType === 'RENEW'} onChange={handleChange} />
                RENEW
              </label>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type='submit' 
            className='w-full bg-blue-600 text-white font-medium p-3 rounded-lg shadow-md'>
            Submit
          </motion.button>
          <p className='mt-4 text-center'>Already have an account? <a href='/' className='text-blue-600 font-medium'>Log in here</a></p>
        </form>
      </motion.div>
    </div>
  );
}
