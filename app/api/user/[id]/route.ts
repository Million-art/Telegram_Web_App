import User  from "@/lib/model/userModel";
import { connectToDatabase } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        await connectToDatabase();
        const { id } = params;
        const user = await User.findOne({ telegramId: id });
 
        if (!user) {
            return NextResponse.json({ error: "user not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error: any) {
        console.error("Error fetching user:", error);
        return NextResponse.json(
            {
                error: "Error fetching user",
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
 