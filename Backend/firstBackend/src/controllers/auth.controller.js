import User from "../models/user.model";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Fields Required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
    }


  } catch (error) {}
};

export const LoginUser = (req, res) => {
  res.json({ message: " Login seccessfull from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: " Logout seccessfull from controller" });
};
