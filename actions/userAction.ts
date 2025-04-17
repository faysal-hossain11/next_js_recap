"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";

export const addUser = async (formData: any) => {
  const fName = formData.get("firstName");
  const lName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  // Email regex
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/;

  // Password rules:
  // At least 8 characters, one uppercase, one lowercase, one digit, one special char
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  // Validate email
  if (!email || !emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Validate password
  if (!password || !passwordRegex.test(password)) {
    throw new Error(
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    );
  }

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
