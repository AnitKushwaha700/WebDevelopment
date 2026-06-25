import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email already Registered" });
      return next(error);
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const LoginUser = (req, res) => {
  res.json({ message: " Login seccessfull from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: " Logout seccessfull from controller" });
};
