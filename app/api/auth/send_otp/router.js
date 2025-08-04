import { NextResponse } from 'next/server';

// In-memory storage for OTP (in production, use a database)
const otpStorage = new Map();

export async function POST(request) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber || phoneNumber.length < 10) {
      return NextResponse.json(
        { message: 'Please provide a valid phone number' },
        { status: 400 }
      );
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP with expiration (5 minutes)
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    otpStorage.set(phoneNumber, {
      otp,
      expiresAt,
      attempts: 0
    });

    // In a real application, you would integrate with an SMS service like:
    // - Twilio
    // - AWS SNS
    // - MessageBird
    // - Fast2SMS (for India)
    
    // For development, we'll just log the OTP
    console.log(`OTP for ${phoneNumber}: ${otp}`);
    
    // Simulate SMS sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      message: 'OTP sent successfully',
      phoneNumber: phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1***$3') // Mask phone number
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { message: 'Failed to send OTP' },
      { status: 500 }
    );
  }
} 