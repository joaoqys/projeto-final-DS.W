(async () => {
  try {
      const dadosCliente = await fetch("http://localhost:5500/clientes"); 
      const clientes = await dadosCliente.json()
// Utilize o array 'clientesData' aqui
console.log(clientes);
const fetchClientes = async () => {
  try {
      const querySnapshot = await getDocs(collection(firestore, 'clientes'));
      const clientesData = [];
      querySnapshot.forEach((doc) => {
          clientesData.push({ id: doc.id, ...doc.data() });
      });
      setClientes(clientesData);
  } catch (error) {
      console.error('Erro ao obter clientes:', error);
  }
};

} catch (error) {
  console.error('Erro:', error);
}
})();