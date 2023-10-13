import Customer from "../models/Customer.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createCustomer = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newCustomer = new Customer(req.body);

  try {
    const savedCustomer = await newCustomer.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { Customers: savedCustomer._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedCustomer);
  } catch (err) {
    next(err);
  }
};

// export const updateCustomer = async (req, res, next) => {
//   try {
//     const updatedCustomer = await Customer.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedCustomer);
//   } catch (err) {
//     next(err);
//   }
// };
// export const updateCustomerAvailability = async (req, res, next) => {
//   try {
//     await Customer.updateOne(
//       { "CustomerNumbers._id": req.params.id },
//       {
//         $push: {
//           "CustomerNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Customer status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
// export const deleteCustomer = async (req, res, next) => {
//   const hotelId = req.params.hotelid;
//   try {
//     await Customer.findByIdAndDelete(req.params.id);
//     try {
//       await Hotel.findByIdAndUpdate(hotelId, {
//         $pull: { Customers: req.params.id },
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json("Customer has been deleted.");
//   } catch (err) {
//     next(err);
//   }
// };
// // export const getCustomer = async (req, res, next) => {
// //   try {
// //     const Customer = await Customer.findById(req.params.id);
// //     res.status(200).json(Customer);
// //   } catch (err) {
// //     next(err);
// //   }
// // };
// export const getCustomers = async (req, res, next) => {
//   try {
//     const Customers = await Customer.find();
//     res.status(200).json(Customers);
//   } catch (err) {
//     next(err);
//   }
// };
