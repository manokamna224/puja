import { NextResponse } from 'next/server';

// In-memory storage for OTP (in production, use a database)
const otpStorage = new Map();

export async function POST(request) {
  try {
    const { phoneNumber, otp } = await request.json();

    if (!phoneNumber || !otp) {
      return NextResponse.json(
        { message: 'Phone number and OTP are required' },
        { status: 400 }
      );
    }

    const storedData = otpStorage.get(phoneNumber);

    if (!storedData) {
      return NextResponse.json(
        { message: 'No OTP found for this phone number. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Check if OTP has expired
    if (Date.now() > storedData.expiresAt) {
      otpStorage.delete(phoneNumber);
      return NextResponse.json(
        { message: 'OTP has expired. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Check if too many attempts
    if (storedData.attempts >= 3) {
      otpStorage.delete(phoneNumber);
      return NextResponse.json(
        { message: 'Too many failed attempts. Please request a new OTP.' },
        { status: 400 }
      );
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      storedData.attempts += 1;
      return NextResponse.json(
        { message: 'Invalid OTP. Please try again.' },
        { status: 400 }
      );
    }

    // OTP is valid - remove it from storage
    otpStorage.delete(phoneNumber);

    // Generate a simple token (in production, use JWT)
    const token = Buffer.from(`${phoneNumber}-${Date.now()}`).toString('base64');

    return NextResponse.json({
      message: 'OTP verified successfully',
      token,
      user: {
        phoneNumber,
        id: Buffer.from(phoneNumber).toString('base64')
      }
    });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { message: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
} 