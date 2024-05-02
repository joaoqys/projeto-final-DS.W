const admin = require("firebase-admin");
const serviceAccount = require("./autentica-19671-firebase-adminsdk-rmaf9-5169180254.json");
const express = require('express');
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autentica-19671-default-rtdb.firebaseio.com"
});
const port = 5500;
const firestore = admin.firestore();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

let clientesData = [];

getClientesData();

app.use(express.json())
app.get('/clientes', async (req, res) => {
  try {
    const clientesRef = firestore.collection('clientes');
    const querySnapshot = await clientesRef.get();

    const clientes = [];
    querySnapshot.forEach(doc => {
      const dadosCliente = doc.data();
      const cliente = {
        id: doc.id,
        ...dadosCliente
      };
      clientes.push(cliente);
    });

    res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ message: "Erro ao buscar clientes" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

