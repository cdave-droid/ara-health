import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Prepare data for Google Apps Script
    const formData = {
      email,
      timestamp: new Date().toISOString(),
    };

    // Send data to Google Apps Script endpoint
    const response = await fetch(process.env.WAITLIST_FORM_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.error(
        "Google Apps Script error:",
        response.status,
        response.statusText
      );
      return NextResponse.json(
        { error: "Failed to submit waitlist data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
