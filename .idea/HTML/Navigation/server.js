const express = require("express");
const cors = require("cors"); // Import CORS
const sendMail = require("./mail"); // ✅ Import sendMail correctly

const app = express();
app.use(express.json()); // Middleware to parse JSON data
app.use(cors()); // ✅ Enable CORS to prevent frontend blocking issues

app.post("/send-email", async (req, res) => {
    const { email, formData } = req.body; // Get email & form data from the request

    try {
        await sendMail(email, "Thank You for Contacting Esteem Shipping", formData);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error sending email.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
