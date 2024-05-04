const User = require("../models/userModel");

exports.getAllUser = async () => {
  try {
    return await User.find().populate("ordersArray");
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return item;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createUser = async (newFields) => {
  try {
    const newUser = new User(newFields);
    return await newUser.save();
  } catch (error) {
    throw new Error("Failed to create User");
  }
};

exports.updateUser = async (id, updatedFields) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });
    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update User");
  }
};
exports.deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};