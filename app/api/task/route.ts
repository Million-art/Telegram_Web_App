import { NextResponse, NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import Task from '@/lib/model/taskModel';
import { TaskStatus } from '@/types/page';

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Get the request body
    const body = await request.json();

    // Extract the required fields from the request body
    const { company, price, telegramChannel, telegramGroup, facebook, web, instagram, twitter, linkedin } = body;

    // Validate the data
    if (!company || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a new task document
    const newTask = new Task({
      company: company?.toString() || '',
      price: price ? parseFloat(price.toString()) : 0,
      telegramChannel: telegramChannel?.toString() || '',
      telegramGroup: telegramGroup?.toString() || '',
      facebook: facebook?.toString() || '',
      web: web?.toString() || '',
      instagram: instagram?.toString() || '',
      twitter: twitter?.toString() || '',
      linkedin: linkedin?.toString() || '',
      status: TaskStatus.pending,  
      claimedBy: [null]
    });

    // Save the task to the database
    await newTask.save();

    // Return a success response
    return NextResponse.json({ message: 'Task added successfully', task: newTask }, { status: 201 });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({ error: 'Error adding task' }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectToDatabase();
    const Tasks = await Task.find();
     return NextResponse.json(Tasks);
  } catch (error: any) {
    console.error("Error fetching Tasks:", error);
    return NextResponse.json({
      error: "Error fetching Tasks",
      message: error.message
    }, {
      status: 500
    });
  }
}