import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongoConnection";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("LiveLoveCalculate");
		const notesConnection = db.collection("notes");

		const allnotes = await notesConnection.find().toArray();
		console.log(allnotes);

		if (allnotes.length === 0) {
			return NextResponse.json({ message: "No notes found" }, { status: 404 });
		}

		return NextResponse.json({ notes: allnotes }, { status: 200 });
	} catch (error) {
		console.error("Error fetching top note:", error);
		return NextResponse.json(
			{ message: `Error fetching top note: ${error}` },
			{ status: 500 },
		);
	}
}

export async function POST(req: Request) {
	const { text, x, y } = await req.json();

	try {
		const client = await clientPromise;
		const database = client.db("LiveLoveCalculate");
		const notes = database.collection("notes");

		const insertedNote = await notes.insertOne({ text, x, y });
		console.log(insertedNote);
		return NextResponse.json(
			{
				message: "Note created",
				id: insertedNote.insertedId,
			},
			{ status: 201 },
		);
	} catch (error) {
		return new Response(JSON.stringify({ message: `Server error: ${error}` }), {
			status: 500,
		});
	}
}
