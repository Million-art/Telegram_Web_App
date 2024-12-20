import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/lib/model/userModel";

export async function POST(request: NextRequest) {
    try {
        // Connect to the database
        await connectToDatabase();

        // Get the form data
        const { userName, telegramId, firstName, lastName, referredBy, balance } = await request.json();

        // Create a new user document
        const user = await User.create({
            userName,
            telegramId,
            firstName,
            lastName,
            referredBy,
            balance,
        });

        // Save the user to the database
        await user.save();

        // Return a success response
        return NextResponse.json({ message: "user added successfully", user }, { status: 201 });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return NextResponse.json({ error: "Error adding user" }, { status: 500 });
    }
}
