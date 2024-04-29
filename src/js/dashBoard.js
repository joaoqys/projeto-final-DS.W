const clientes = [
    { nome: "Cliente 1", cep: "12345-678" },
    { nome: "Cliente 2", cep: "54321-987" },
    { nome: "Cliente 3", cep: "54321-987" },
    { nome: "Cliente 4", cep: "87654-321" },
    { nome: "Cliente 5", cep: "12345-678" },
    { nome: "Cliente 6", cep: "87654-321" },
    // Adicione mais clientes conforme necessário
  ];
  
  // Função para contar o número de cadastros por estado
  function contarCadastrosPorEstado(clientes) {
    const contagem = {
      "SP": 0,
      "RJ": 0,
      "MG": 0,
      "ES": 0,
      "AC": 0,
      "AL": 0,
      "AM": 0,
      "BA": 0,
      "CE": 0,
      "DF": 0,
      "GO": 0,
      "MA": 0,
      "MT": 0,
      "MS": 0,
      "PA": 0,
      "PB": 0,
      "PR": 0,
      "PE": 0,
      "PI": 0,
      "RN":0,
      "RS":0,
      "RO": 0,
      "RR": 0,
      "SC": 0,
      "SE": 0,
      "TO": 0
      // Adicione mais estados conforme necessário
    };
  
    clientes.forEach(cliente => {
      const estado = determinarEstado(cliente.cep);
      if (estado) {
        contagem[estado]++;
      }
    });
  
    return contagem;
  }
  
  // Função para determinar o estado com base no CEP
  function determinarEstado(cep) {
    const codigoEstado = parseInt(cep.substring(0, 3)); // Extrai os três primeiros dígitos do CEP e converte para número inteiro
  
    if (codigoEstado >= 100 && codigoEstado <= 199) {
      return "SP";
    } else if (codigoEstado >= 200 && codigoEstado <= 289) {
      return "RJ";
    } else if (codigoEstado >= 290 && codigoEstado <= 299) {
      return "ES";
    } else if (codigoEstado >= 300 && codigoEstado <= 399) {
      return "MG";
    } else if( codigoEstado==699){
      return "AC"
    } else if( codigoEstado>= 570 && codigoEstado<= 579){
      return "AL"
    } else if( codigoEstado>= 694 && codigoEstado<= 698){
      return "AM"
    } else if( codigoEstado>= 400 && codigoEstado<= 489){
      return "BA"
    } else if( codigoEstado>= 600 && codigoEstado<= 639){
      return "CE"
    } else if( codigoEstado>= 700 && codigoEstado<= 736){
      return "DF"
    } else if( codigoEstado>= 728 && codigoEstado<= 767){
      return "GO"
    } else if( codigoEstado>= 650 && codigoEstado<= 659){
      return "MA"
    } else if( codigoEstado>= 780 && codigoEstado<= 788){
      return "MT"
    } else if( codigoEstado>= 790 && codigoEstado<= 799){
      return "MS"
    } else if( codigoEstado>= 660 && codigoEstado<= 688){
      return "PA"
    } else if( codigoEstado>= 580 && codigoEstado<= 589){
      return "PB"
    } else if( codigoEstado>= 800 && codigoEstado<= 879){
      return "PR"
    } else if( codigoEstado>= 500 && codigoEstado<= 569){
      return "PE"
    } else if( codigoEstado>= 640 && codigoEstado<= 649){
      return "PI"
    } else if( codigoEstado>= 590 && codigoEstado<= 599){
      return "RN"
    } else if( codigoEstado>= 900 && codigoEstado<= 999){
      return "RS"
    } else if( codigoEstado== 789){
      return "RO"
    } else if( codigoEstado== 693){
      return "RR"
    } else if( codigoEstado>= 880 && codigoEstado<= 899){
      return "SC"
    } else if( codigoEstado>= 490 && codigoEstado<= 499){
      return "SE"
    } else if( codigoEstado>= 770 && codigoEstado<= 779){
      return "TO"
    } else{
      return "none"
    }
    // Adicione mais estados conforme necessário
  
    // Se o código não corresponder a nenhum estado conhecido, retorna null
    return null;
  }
  
  // Função para exibir os dados na tabela HTML e no gráfico de barras
  function exibirDadosNaTabelaEGráfico(contagem) {
    const tabela = document.getElementById("clientesPorEstado");
    const ctx = document.getElementById("myChart").getContext("2d");

    const estados = [];
    const numCadastros = [];

    for (const estado in contagem) {
      if (contagem[estado] > 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${estado}</td><td>${contagem[estado]}</td>`;
        tabela.appendChild(row);

        estados.push(estado);
        numCadastros.push(contagem[estado]);
      }
    }

    // Criando o gráfico de barras
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: estados,
        datasets: [{
          label: "Número de Cadastros por Estado",
          data: numCadastros,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
  // Conta o número de cadastros por estado
  const contagemPorEstado = contarCadastrosPorEstado(clientes);
  
  // Exibe os dados na tabela HTML e no gráfico de barras
  exibirDadosNaTabelaEGráfico(contagemPorEstado);

  const clientesR = [
    { nome: "Cliente 1", ramo: "Tecnologia" },
    { nome: "Cliente 2", ramo: "Saúde" },
    { nome: "Cliente 3", ramo: "Tecnologia" },
    { nome: "Cliente 4", ramo: "Alimentício" },
    { nome: "Cliente 5", ramo: "Saúde" },
    { nome: "Cliente 6", ramo: "Tecnologia" },
    // Adicione mais clientes conforme necessário
  ];
  
  // Função para contar o número de clientes por ramo de trabalho
  function contarClientesPorRamo(clientesR) {
    const contagem = {};

    clientesR.forEach(cliente => {
      const ramo = cliente.ramo;
      if (!contagem[ramo]) {
        contagem[ramo] = 0;
      }
      contagem[ramo]++;
    });
  
    return contagem;
  }
  
  // Função para exibir os dados na tabela HTML
  function exibirDadosNaTabela(contagem) {
    const tabela = document.getElementById("tabelaClientesPorRamo");
    for (const ramo in contagem) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${ramo}</td><td>${contagem[ramo]}</td>`;
      tabela.appendChild(row);
    }
  }
  
  // Conta o número de clientes por ramo de trabalho
  const contagemPorRamo = contarClientesPorRamo(clientesR);
  
  // Exibe os dados na tabela HTML
  exibirDadosNaTabela(contagemPorRamo);
