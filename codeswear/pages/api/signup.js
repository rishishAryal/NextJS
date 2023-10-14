import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    
    const { name, email, password } = await req.body;
    console.log(req.body);
    if (!email || !email.includes("@") || !password || !name) {
        return res.status(422).json({ message: "Invalid input" });
    }

    // Check if user with given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(422).json({ message: "User with this email already exists" });
    }

    const user = await User.create({ name, email, password });
    return res.status(201).json({ message: "User created",success:true });
}

export default connectDB(handler);
