function Cadastrar(){
    var auth = null;

    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
    .then(function(user){
        alert("Seus dados foram cadastrados com sucesso! ");
        auth = user;

        document.getElementById("email").value = ''
        document.getElementById("senha").value = ''

    }).catch(function(error){
        alert("Falha ao cadastrar", error)
    })
    
}