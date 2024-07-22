const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4234;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: "jacklarry.joke@gmail.com",
        user: "petheaven25112023@gmail.com",
        pass: "glqj dtoq ihyx naso"
    }
});

app.post('/send-feedback-email', (req, res) => {
    const { feedback } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'peth8222@gmail.com', 
        subject: 'Feedback from Pet Heaven',
        html: `<body>
                    <font style=""font-family: Serif; font-size: 14pt;"">
                    Feedback has beed submitted.<br/>
                    <p>${feedback}</p>
                    </font>            
                </body>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error." + error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.post('/send-adopt-email', async (req, res) => {
    console.log(req);
    const data = req.body;
    const adminEmail = 'peth8222@gmail.com';
    console.log(data);

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'peth8222@gmail.com', 
        subject: 'Pet Heaven Adoption Form',
        html: `<html>
                    <head></head>
                    <body>
                        <font style="font-family: Serif; font-size: 14pt;">
                        ${data.fullname} has submitted an adoption form for ${data.petid} (${data.petType}).<br />
                        Adopter's email address: ${data.email}. <br />
                        Mobile number: ${data.phone}.<br />
                        Adopter has requested ${data.date} for an adoption appointment.
                        </font>
                    </body>
                </html>`
    };

   transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error while trying to send email." + error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.post('/send-release-email', async (req, res) => {
    console.log(req);
    const data = req.body;
    const adminEmail = 'peth8222@gmail.com';
    console.log(data);

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'peth8222@gmail.com', // Replace with the administrator's email address
        subject: 'Pet Heaven Releasing Form',
        html: `<html>
                <head></head>
                <body>
                    <font style="font-family: Serif; font-size: 14pt;">
                    ${data.fullname} has submitted a form to release a pet.<br />
                    Adopter's email is ${data.email} and mobile number is ${data.phone}.<br />
                    Pet type : ${data.petType} <br />
                    Pet name : ${data.petName} <br />
                    Pet Gender : ${data.gender} <br />
                    Release date : ${data.date} <br />
                    Reason for releasing - <br />
                    ${data.reason}
                    </font>
                </body>
            </html>`
    };

    //console.log(mailOptions);

   transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error while trying to send email." + error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// app.post('/send-release-email', async (req, res) => {
//     console.log(req);
//     const data = req.body;
//     const adminEmail = 'peth8222@gmail.com';
//     console.log(data);

//     // Email options
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'peth8222@gmail.com', // Replace with the administrator's email address
//         subject: 'Pet Heaven Release Notification',
//         html: `<html>
//                     <head></head>
//                     <body>
//                         <font style="font-family: Consolas; font-size: 12pt;">
//                         ${data.fullname} has submitted a form to release a pet.<br />
//                         Adopter's email is ${data.email} and mobile number is ${data.phone}.<br />
//                         Pet type : ${data.petType} <br />
//                         Pet name : ${data.petName} <br />
//                         Pet Gender : ${data.gender} <br />
//                         Release date : ${data.date} <br />
//                         Reason for releasing - <br />
//                         ${data.reason}
//                         </font>
//                     </body>
//                 </html>`
//         html:  `<html>
//         <head></head>
//         <body>
//             <font style="font-family: Consolas; font-size: 12pt;">
//             ${data.fullname} has submitted an adoption form for ${data.petid} (${data.petType}).<br />
//             Adopter's email address: ${data.email} and mobile number: ${data.phone}.<br />
//             Adopter has requested ${data.date} for an adoption appointment.
//             </font>
//         </body>
//     </html>`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send("Error while trying to send email." + error);
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
//     }
// );

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
