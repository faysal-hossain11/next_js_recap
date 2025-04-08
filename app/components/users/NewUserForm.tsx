import React from 'react';

const NewUserForm = () => {
    const addUser = async (formData: any) => {
        "use server";

        console.log(formData.get("name"));
        console.log(formData.get("email"));
        

    }
    return (
        <form action={addUser} className='w-full'>
            <div className="mb-5">
                <label htmlFor="name" className='mb-2'>Name</label>
                <input type="text" name='name' placeholder='name' className='w-full py-2 px-3 outline-none border rounded-sm' />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className='mb-2'>Email</label>
                <input type="email" name="email" placeholder='email' className='w-full py-2 px-3 outline-none border rounded-sm' />
            </div>
            <div>
                <button type='submit' className='w-full py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-sm text-white cursor-pointer'>Submit</button>
            </div>
        </form>
    );
};

export default NewUserForm;