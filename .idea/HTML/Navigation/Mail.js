const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "sohampbandekar@gmail.com", // Your email
        pass: "lcwsnrhwtprpnyvv", // App password (DO NOT use your real password)
    },
});

async function sendMail(to, subject, formData) {
    try {
        const { personalDetails, professionalDetails, shippingDetails, cargoDetails, finalReview } = formData;

        const message = `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333; border-radius: 8px;">
                <h2 style="color: #004080; text-align: center;">Thank You for Contacting Esteem Shipping</h2>
                <p style="text-align: center;">Dear ${personalDetails.firstName} ${personalDetails.lastName},</p>
                <p>We appreciate your interest in our services. Below are the details you submitted:</p>

                <h3 style="color: #004080;">Personal Details</h3>
                <p><strong>Name:</strong> ${personalDetails.firstName} ${personalDetails.lastName}</p>
                <p><strong>Email:</strong> ${personalDetails.email}</p>
                <p><strong>Phone:</strong> ${personalDetails.phone}</p>
                <p><strong>Country:</strong> ${personalDetails.country}</p>

                <h3 style="color: #004080;">Professional Details</h3>
                <p><strong>Company Name:</strong> ${professionalDetails.companyName || "Not provided"}</p>
                <p><strong>Industry:</strong> ${professionalDetails.industry || "Not provided"}</p>
                <p><strong>Job Role:</strong> ${professionalDetails.jobRole || "Not provided"}</p>
                <p><strong>Employees:</strong> ${professionalDetails.employees || "Not provided"}</p>

                <h3 style="color: #004080;">Shipping Details</h3>
                <p><strong>Cargo Type:</strong> ${shippingDetails.cargoType || "Not provided"}</p>
                <p><strong>Import/Export:</strong> ${shippingDetails.importExport || "Not provided"}</p>
                <p><strong>Shipping Modes:</strong> ${shippingDetails.shippingModes.length > 0 ? shippingDetails.shippingModes.join(", ") : "Not provided"}</p>

                <h3 style="color: #004080;">Cargo Details</h3>
                <p><strong>Services:</strong> ${cargoDetails.services.length > 0 ? cargoDetails.services.join(", ") : "Not provided"}</p>
                <p><strong>Pricing Preference:</strong> ${cargoDetails.pricing || "Not provided"}</p>
                <p><strong>Tracking Required:</strong> ${cargoDetails.tracking}</p>

                <h3 style="color: #004080;">Final Review</h3>
                <p><strong>Logistics Challenges:</strong> ${finalReview.logisticsChallenges || "None provided"}</p>

                <p style="text-align: center; margin-top: 20px;">
                    <strong>We will get back to you shortly!</strong>
                </p>

                <p style="text-align: center; color: #777; font-size: 12px;">
                    Esteem Shipping Services | Global Logistics Experts | esteemshipping.com
                </p>
            </div>
        `;

        let info = await transporter.sendMail({
            from: `"Esteem Shipping" <sohampbandekar@gmail.com>`, // Sender name
            to: to,
            subject: subject,
            html: message, // Formatted email body
        });

        console.log("Message sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

// ✅ Ensure proper module export
module.exports = sendMail;
