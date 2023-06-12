const emailTemplate = (otp, fullName) =>
{
return `<div style="max-width:600px;margin:0 auto;padding:20px"><div style="text-align:center;margin-bottom:20px"><img src="https://i.ibb.co/GMmLLLK/Tronix-1.png" alt="Logo" width="150"></div><h1 style="color:#333">Welcome to our website!</h1><p style="color:#666">Dear ${fullName},</p><p style="color:#666">Thank you for joining our community. We are excited to have you on board.</p><p style="color:#666">Please click on the link below to verify your email address:</p><p style="color:#007bff"><a href=${otp} style="color:#fff;background-color:#007bff;padding:10px 20px;text-decoration:none;border-radius:4px">Verify Email</a> Your Otp is ${otp}</p><p style="color:#666">If you have any questions or need assistance, feel free to contact our support team at [Support Email].</p><p style="color:#666">Best regards,<br>Reshme Nila</p></div>`;
};
module.exports = emailTemplate;
