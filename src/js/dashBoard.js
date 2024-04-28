const firebaseConfig = {
    apiKey: "AIzaSyBDY6PdMsccR6n-0NaVXewiFionauoqwgs",
    authDomain: "autentica-19671.firebaseapp.com",
    projectId: "autentica-19671",
    storageBucket: "autentica-19671.appspot.com",
    messagingSenderId: "315303510549",
    appId: "1:315303510549:web:14559a91963607723e841c"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function getCepsClientes() {
    return database.ref('clientes').once('value').then(snapshot => snapshot.val());
}

function contarClientesPorEstado(ceps) {
    const estados = {};
    ceps.forEach(cep => {
        const estado = cep.substring(0, 2);
        if (estados[estado]) {
            estados[estado]++;
        } else {
            estados[estado] = 1;
        }
    });
    return estados;
}

function atualizarTabela() {
    getCepsClientes().then(clientes => {
        const ceps = Object.values(clientes).map(cliente => cliente.cep);
        const estados = contarClientesPorEstado(ceps);
        const tbody = document.querySelector('#clientesPorEstado tbody');
        tbody.innerHTML = '';
        for (const estado in estados) {
            const row = `<tr>
                            <td>${estado}</td>
                            <td>${estados[estado]}</td>
                        </tr>`;
            tbody.innerHTML += row;
        }
    }).catch(error => console.error('Erro ao buscar dados:', error));
}

window.onload = atualizarTabela;