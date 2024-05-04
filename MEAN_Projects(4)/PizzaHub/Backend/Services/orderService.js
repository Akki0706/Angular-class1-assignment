const Order = require("../models/orderModel");

exports.getAllOrders = async () => {
  try {
    return await Order.find();
  } catch (error) {
    throw new Error(`Failed to fetch orders: ${error.message}`);
  }
};

exports.placeOrder = async (newFields) => {
  try {
    const order = new Order(newFields);
    const savedOrder = await order.save();
    return savedOrder;
  } catch (error) {
    throw new Error(`Failed to place order: ${error.message}`);
  }
};

exports.updateOrderStatus = async (id, updatedFields) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });
    if (!updatedOrder) {
      throw new Error("Order not found");
    }
    return updatedOrder;
  } catch (error) {
    throw new Error(`Failed to update order status: ${error.message}`);
  }
};