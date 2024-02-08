const User=require("./usermodel")

const checkLogin = async (req, res, next) => {
  try {
    const { mobile } = req.body;
    console.log(mobile)

    if (mobile===null) {
      console.log("no number")
       res.status(400).json({ success: false, message: 'Mobile number (mobile) is required in the request body' });
    }
    else{
      
    // Query the database to find the user with the provided mobile number
    const user = await User.findOne({ mobile });
    if (!user) { 
      return res.status(404).json({ success: false, message: 'User not found' });
      
    }
    // If the user is found, you can send back the user data or whatever is needed
    return res.status(200).json({ success: true, data: user, msg: 'Login successful' });
    console.log(user)
  }
  } catch (error) {
    console.error('Error checking login:', error);
    return res.status(500).json({ success: false, message: 'Error checking login' });
  }
};

const insertUser = async (req, res, next) => {
  console.log("hello")
  try {
    const { mobile, name} = req.body;

    // Check if required fields are provided
    if (!mobile || !name ) {
      return res.status(400).json({ success: false, message: 'Mobile, username, and email are required in the request body' });
    }

    // Check if the user with the provided mobile number already exists
    const existingUser = await User.findOne({ mobile: mobile });
    console.log(existingUser)

    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User with this mobile number already exists' });
    }

    // Create a new user instance using the User model
    const newUser = new User({
      mobile: mobile,
      name: name,
      // Add other fields as needed
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ success: true, data: savedUser, message: 'User created successfully' });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ success: false, message: 'Error inserting user' });
  }
};


module.exports = { checkLogin,insertUser };