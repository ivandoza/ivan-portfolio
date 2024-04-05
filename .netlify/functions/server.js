import express, { Router } from "express";
import serverless from "serverless-http";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const server = express();
const router = express.Router();

server.use(cors());

// Middleware para parsear el cuerpo de las solicitudes
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ivandoza@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/api/send-email', (req, res) => {
    console.log(req)
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'ivandoza@gmail.com',
    to: 'ivandortx@gmail.com',
    subject: `Nuevo mensaje desde el formulario de contacto, Asunto: ${subject}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico'  + error.message);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

server.use('/api/', router);

export const handler = serverless(router);
