"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";

export const addUser = async (flag: any, formData: FormData ) => {
  const fName = formData.get("firstName");
  const lName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("log with flag", flag);

   const newUser = {
    fName,
    lName,
    email,
    password,
  };

  console.log("New User Created", newUser);
  
};

// push to the database
export const addUser2 = async (formData: any) => {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };
  

//   try {
//     // db connention
//     await connectMongo();

//     // insert into database
//     await new User(userData).save();
//   } catch (err) {
//     console.log(err);
//   }
};
