const admin = require("firebase-admin");
const serviceAccount = require("./autentica-19671-firebase-adminsdk-rmaf9-5169180254.json");
const express = require('express');
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autentica-19671-default-rtdb.firebaseio.com"
});
const port = 300;
const firestore = admin.firestore();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json())
app.get('/usuarios', async (req, res) => {
  try {
    const userRef = firestore.collection('usuarios');
    const querySnapshot = await userRef.get();

    const users = [];
    querySnapshot.forEach(doc => {
      const dadosUser = doc.data();
      const user = {
        id: doc.id,
        ...dadosUser
      };
      users.push(user);
    });

    res.json(users);
  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
    res.status(500).json({ message: "Erro ao buscar usuarios" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});