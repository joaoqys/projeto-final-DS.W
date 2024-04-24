const firebaseConfig = {
    apiKey: "AIzaSyBDY6PdMsccR6n-0NaVXewiFionauoqwgs",
    authDomain: "autentica-19671.firebaseapp.com",
    projectId: "autentica-19671",
    storageBucket: "autentica-19671.appspot.com",
    messagingSenderId: "315303510549",
    appId: "1:315303510549:web:14559a91963607723e841c"
};

firebase.initializeApp(firebaseConfig);

function registrar() {
    firebase.auth().createUserWithEmailAndPassword(
        document.getElementById("email").value,
        document.getElementById("senha").value
    )
    .then(function (user) {
        alert("Dados cadastrados com sucesso!");
        document.getElementById("email").value = '';
        document.getElementById("senha").value = '';
    })
    .catch(function(error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar: " + error.message);
    });
}

document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});
