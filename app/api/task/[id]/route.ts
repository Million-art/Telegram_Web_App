import Task from "@/lib/model/taskModel"
import { connectToDatabase } from "@/lib/mongoose"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
      await connectToDatabase();
      const { id } = params;
      const task = await Task.findById(id);
  
      if (!task) {
        return NextResponse.json({ error: "task not found" }, { status: 404 });
      }
  
      return NextResponse.json(task);
    } catch (error: any) {
      console.error("Error fetching task:", error);
      return NextResponse.json(
        {
          error: "Error fetching task",
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }

  export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
      await connectToDatabase();
      const { id } = params;
      const task = await Task.findByIdAndDelete(id);
  
      if (!task) {
        return NextResponse.json({ error: "task not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
    } catch (error: any) {
      console.error("Error deleting task:", error);
      return NextResponse.json(
        {
          error: "Error deleting task",
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }