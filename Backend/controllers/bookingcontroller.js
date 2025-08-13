import Booking from '../models/booking.js';

export const createBooking = (req, res) => {
    try {
        const bookingData = req.body; // body se data lena
        console.log("Booking Received:", bookingData);

        // Example response
        res.status(201).json({
            message: "Booking created successfully!",
            data: bookingData
        });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
};

