import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = new NextResponse(
      JSON.stringify({
        message: "Logout successful",
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Clear the "token" cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // Expire the cookie
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
