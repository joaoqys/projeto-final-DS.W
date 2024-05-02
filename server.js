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
async function getClientesData() {
  try {
    const clientesRef = await firestore.collection('clientes');
    const snapshot = await clientesRef.get();
    console.log("Antes da snapshot");
    console.log("Array");
    console.log("snapshot:",snapshot);
    snapshot.forEach(doc => {   
      const data = doc.data();
      // Verificar se o documento possui os campos "cep" e "ramo"
      if (data.cep && data.ramo) {
        clientesData.push({
          cep: data.cep,
          ramo: data.ramo
        });
      }
    });
    console.log("Clientes2:",clientesData);
    module.exports = clientesData;
  } catch (error) {
    console.error('Erro ao obter dados dos clientes:', error);
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

