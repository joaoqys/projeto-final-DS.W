const firebaseConfig = {
    apiKey: "AIzaSyBDY6PdMsccR6n-0NaVXewiFionauoqwgs",
    authDomain: "autentica-19671.firebaseapp.com",
    projectId: "autentica-19671",
    storageBucket: "autentica-19671.appspot.com",
    messagingSenderId: "315303510549",
    appId: "1:315303510549:web:14559a91963607723e841c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function registrar() {

    var nomeInput = document.getElementById("nome");
    var nomeValue = nomeInput.value.trim();
    if (nomeValue.length < 3 || !/^[a-zA-ZÀ-ú\s]+$/.test(nomeValue)) {
        document.getElementById("nomeError").style.display = "block";
        return;
    } else {
        document.getElementById("nomeError").style.display = "none";
    }

    var cepInput = document.getElementById("cep");
    var cepValue = cepInput.value.trim();

    if (!cepValue.match(/^\d{5}-?\d{3}$/)) {
        document.getElementById("cepError").style.display = "block";
        return;
    } else {
        document.getElementById("cepError").style.display = "none";
    }


    var telefoneInput = document.getElementById("telefone");
    var telefoneValue = telefoneInput.value.trim();

    if (!telefoneValue.match(/^\d{10,11}$/)) {
        document.getElementById("telefoneError").style.display = "block";
        return;
    } else {
        document.getElementById("telefoneError").style.display = "none";
    }



    var ramoInput = document.getElementById("ramo");
    var ramoValue = ramoInput.value.trim();

    if (ramoValue.length === 0 || /^\s*$/.test(ramoValue)) {
        document.getElementById("ramoError").style.display = "block";
        return;
    } else {
        document.getElementById("ramoError").style.display = "none";
    }



    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();

    if (!emailValue.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        document.getElementById("emailError").style.display = "block";
        return;
    } else {
        document.getElementById("emailError").style.display = "none";
    }


    var senhaInput = document.getElementById("senha");
    var senhaValue = senhaInput.value.trim();
    if (senhaValue.length < 8 || !senhaValue.match(/[a-z]/) || !senhaValue.match(/[A-Z]/) || !senhaValue.match(/\d/) || !senhaValue.match(/[$@$!%*?&]/)) {
        document.getElementById("senhaError").style.display = "block";
        return;
    } else {
        document.getElementById("senhaError").style.display = "none";
    }



    firebase.auth().createUserWithEmailAndPassword(emailValue, senhaValue)
    .then(function (userCredential) {
        return firebase.firestore().collection("clientes").doc(userCredential.user.uid).set({
            nome: nomeValue,
            cep: cepValue,
            telefone: telefoneValue,
            ramo: ramoValue,
            email: emailValue
        });
    })
    .then(function () {
        document.getElementById("mensagem").innerHTML = "Dados cadastrados com sucesso!";
        document.getElementById("cadastroForm").reset();
    })
    .catch(function(error) {
        document.getElementById("mensagem").innerHTML = "Erro ao cadastrar: " + error.message;
        console.error("Erro ao cadastrar:", error);
    });
}

document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});
