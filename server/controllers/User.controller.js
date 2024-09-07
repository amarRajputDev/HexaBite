// controllers/signupController.js
import bcrypt from "bcryptjs"
import { User } from "../models/user.model.js";
import {  generateAccessToken } from "../middleware/generatejwt.js";

export const signup = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword , isSeller , username , country } = req.body;
  console.log("start")

  // Basic validation
  if (!firstname || !lastname || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log(password)

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    console.log("enter try")
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const existingemail = await User.findOne({ email });

    if (existingemail) {
      return res.status(400).json({ message: 'email already exists' });
    }



    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    console.log("user created")
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      Isseller:isSeller,
      username,
      country
    });

    // Save the user to the database
    await newUser.save();

   const token =  generateAccessToken(newUser)

   res.cookie('jwt', token, {
    httpOnly: true,  // Prevent client-side access via JavaScript
    secure: true,  
    sameSite: 'None',  // Ensure the cookie is sent only over HTTPS
    maxAge: 86400000  // Cookie expiry time in milliseconds (24 hours)
});

    res.status(201).json({ message: 'User created successfully and token set' , User:newUser });


  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const userInfo = async (req, res) => {
    
  try {
      const id = req.user.id;
      console.log(id)
     

      // Find the user by ID
      const userdata = await User.findOne({ _id:id });

      if (userdata) {
         console.log("user find")
      }
     
      console.log(userdata)


      if (!userdata) {
          return res.status(404).json({ message: "User not found" });
      }

      // Send response with user data
      res.status(200).json({
          message: "Data fetched successfully",
          userdata
      });
  } catch (err) {
      console.error("Error fetching user info:", err);
      res.status(500).json({ message: "Server error" });
  }
};



export const registerUser = async (req, res) => {
  try {
    // Ensure that the user is authenticated and req.user.id exists
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const id = req.user.id;
    console.log(`User ID: ${id}`);

    // Assuming you're sending data as JSON in the request body
    const updateData = req.body; 

    // Validate that updateData is not empty
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No data provided for update' });
    }

    // Update the user with new data
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated data
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Update successful', user: updatedUser });
    
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}



export const login = async(req , res) => {
  const {username , email , password } = req.body

  try {

    const user = await User.findOne({username})

    if (!user) {
      return res.status(300).json({message:"user not found"})
    }

    if (user.email != email) {
      return res.status(300).json({message:"wrong email"})
    }

    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token =  generateAccessToken(user)

    res.cookie('jwt', token, {
     httpOnly: true,  // Prevent client-side access via JavaScript
     secure: true,  
     sameSite: 'None',  // Ensure the cookie is sent only over HTTPS
     maxAge: 86400000  // Cookie expiry time in milliseconds (24 hours)
 });

 return res.status(200).json({ message:"Logged in successfull" , user })


    
  } catch (error) {
    console.log(error)
  }

}