import connectDB from "@/mongoose/connectDB";
import Trivia from "@/mongoose/models/Trivia";

const handler = async (req, res) => {
  try {
    await connectDB();
    const randomTrivia = await Trivia.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(randomTrivia[0]); // Send the first element (only one due to $sample)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving random trivia" });
  }
};

export default handler;
