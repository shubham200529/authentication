import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Message from "@/models/messagemodel";

connect();

export async function POST(request: NextRequest) {
  try {
    const { text, sender } = await request.json();

    const newMessage = new Message({
      text,
      sender,
    });

    await newMessage.save();

    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });

  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await Message.find({})
      .populate("sender", "email")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, messages });

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
