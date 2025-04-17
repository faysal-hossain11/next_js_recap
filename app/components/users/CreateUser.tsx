import { addUser } from "@/actions/userAction";
import React from "react";

const CreateUser = () => {
    
  return (
    <form action={addUser} className="w-3/5 mx-auto p-10 rounded-md bg-blue-400 border-1" outline-none>
      <div className="mb-4">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          required
          className="w-full py-2 px-3 rounded-md border-1 outline-none"
          placeholder="first name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          required
          className="w-full py-2 px-3 rounded-md border-1 outline-none"
          placeholder="last name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Eamil:</label>
        <input
          type="email"
          name="email"
          required
          className="w-full py-2 px-3 rounded-md border-1 outline-none"
          placeholder="email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          required
          className="w-full py-2 px-3 rounded-md border-1 outline-none"
          placeholder="password"
        />
      </div>
      <div>
        <button type="submit" className="bg-green-500 text-center w-full rounded-md p-3 ">Submit</button>
      </div>
    </form>
  );
};

export default CreateUser;
