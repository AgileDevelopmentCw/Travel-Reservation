import Booking from "../models/Booking.js";

export const updateBooking = async (req,res,next)=>{
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
}
export const deleteBooking = async (req,res,next)=>{
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getBooking = async (req,res,next)=>{
  try {
    const Booking = await Booking.findById(req.params.id);
    res.status(200).json(Booking);
  } catch (err) {
    next(err);
  }
}
export const getBookings = async (req,res,next)=>{
  try {
    const Bookings = await Booking.find();
    res.status(200).json(Bookings);
  } catch (err) {
    next(err);
  }
}