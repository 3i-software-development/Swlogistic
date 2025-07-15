import { NextResponse } from 'next/server';
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7272';

export async function GET(request: Request) {
  try {
    // Get userId from query params
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    console.log('API Route: Fetching orders for userId:', userId);

    if (!userId) {
      return NextResponse.json(
        { error: 'UserId is required' },
        { status: 400 }
      );
    }

    // Forward the request to backend
    const response = await axios.get(
      `${BACKEND_URL}/api/v1/orderManagers/GetOrdersByUserId`,
      {
        params: { userId },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('API Route: Received response from backend:', response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
} 