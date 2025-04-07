import React from 'react';

const NewUserForm = () => {
    return (
        <div className='w-full'>
            <div className="mb-5">
                <label htmlFor="name" className='mb-2'>Name</label>
                <input type="text" placeholder='name' className='w-full py-2 px-3 outline-none border rounded-sm' />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className='mb-2'>Email</label>
                <input type="email" placeholder='email' className='w-full py-2 px-3 outline-none border rounded-sm' />
            </div>
            <div>
                <button type='submit' className='w-full py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-sm text-white cursor-pointer'>Submit</button>
            </div>
        </div>
    );
};

export default NewUserForm;