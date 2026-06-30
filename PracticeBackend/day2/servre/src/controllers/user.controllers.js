import User from "../models/user.model.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      message: "User Registered",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

