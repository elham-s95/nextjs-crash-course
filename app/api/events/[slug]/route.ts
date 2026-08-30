import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Event from '@/database/event.model';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await connectDB();

    const { slug } = await params;

    const event = await Event.findOne({ slug });

    if (!event) {
      return NextResponse.json(
        { message: 'Event not found' },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: 'Event fetched successfully', event },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Event fetching failed',
        error: e instanceof Error ? e.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
