const admin = require("firebase-admin");
const serviceAccount = require("./autentica-19671-firebase-adminsdk-rmaf9-5169180254.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autentica-19671-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

async function getClientesData() {
  try {
    const clientesRef = db.collection('Clientes');
    const snapshot = await clientesRef.get();
    
    const clientesData = [];
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

    return clientesData;
  } catch (error) {
    console.error('Erro ao obter dados dos clientes:', error);
    throw error;
  }
}

module.exports = {
  getClientesData: getClientesData
};
