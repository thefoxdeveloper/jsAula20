const produtos = [
  {
    id: 1,
    nome: "Pão doce",
    estoque: 40,
    preco: 2,
  },
  {
    id: 2,
    nome: "Bolacha de nata(pacote)",
    estoque: 25,
    preco: 20,
  },
];

const inicial = Number(
  prompt(`
  Bem-vindo à padaria do Sr. João
  Escolha a opção desejada:
  
  1- Listar Todos os Produtos Disponíveis
  2- Adicionar um Novo Produto ao Catálogo
  3- Editar Produto do Catálogo
  4- Remover um Produto do Catálogo
  5- Fazer pedido
  6- Somar estoque
  7- Mostrar os pedidos
  8- Faturamento diario
  
  `)
);

/*Listar Todos os Produtos Disponíveis: O sistema deve ser capaz de exibir uma
  lista de todos os produtos disponíveis na padaria.*/

function listarProdutos() {
  produtos.forEach((produto) => {
    console.log(
      `ID:${produto.id} | Nome:${produto.nome} | Estoque:${produto.estoque} | Preço:${produto.preco}`
    );
  });
}

if (inicial === 1) {
  listarProdutos();
}

/*Adicionar um Novo Produto ao Catálogo: O sistema deve permitir que o usuário
  adicione um novo produto ao catálogo. O produto deve ser adicionado com um
  nome, preço e estoque.*/

let NovoProduto;
function cadastrarProdutos(id, nome, estoque, preco) {
  NovoProduto = {
    id: (Math.random() * 1000).toFixed(0),
    nome: prompt("Insira o nome do produto."),
    estoque: Number(prompt("Insira a quantidade de produto no estoque.")),
    preco: Number(prompt("Insira o valor unitário do produto.")),
  };
  produtos.push(NovoProduto);
}

if (inicial === 2) {
  cadastrarProdutos();
  let continuar = confirm("Deseja continuar cadastrando?");
  while (continuar === true) {
    cadastrarProdutos();
    continuar;
  }
}

/*Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as
  informações de um produto existente no catálogo.*/

function atualizarProduto(index, nome, estoque, preco) {
  produtos[index] = {
    nome: prompt("Insira o nome atualizado do produto."),
    estoque: Number(
      prompt("Insira a quantidade atualizada do produto no estoque.")
    ),
    preco: Number(prompt("Insira o valor atualizado do produto.")),
  };
}

if (inicial === 3) {
  console.log(produtos);
  const id = prompt("Insira o ID do produto:");
  const atualizacao = produtos.find((produto) => produto.id === id);
  const index = produtos.findIndex((produto) => produto.id == id);
  atualizarProduto(index);
  console.log(produtos);
}

/*Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova
  um produto do catálogo.*/

function remover(index) {
  produtos.splice(index, 1);
}

if (inicial === 4) {
  const id = prompt("Insira o ID do produto:");
  const index = produtos.findIndex((produto) => produto.id == id);
  remover(index);
  console.log(produtos);
}

/*Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam
  pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de
  cada um.*/
/*Você pode criar um array separado para armazenar os pedidos. Cada
  pedido pode ser um objeto que contém informações como o cliente e uma
  lista de produtos pedidos.*/

const pedidos = [
  {
    cliente: "Julia",
    produtospedidos: [
      {
        produto: "Bolacha de nata(pacote)",
        quantidade: 5,
      },
    ],
  },
  {
    cliente: "Mauro",
    produtospedidos: [
      {
        produto: "Bolacha de nata(pacote)",
        quantidade: 5,
      },
      {
        produto: "Pão doce",
        quantidade: 10,
      },
    ],
  },
];

// function cadastrarPedido(cliente, produto, quantidade) {
//   cliente = prompt("Insira seu nome");
//   const validacaocliente = pedidos.some((pedido) => pedido.cliente === cliente);
//   if (validacaocliente === true) {
//     produto = prompt("Insira o produto desejado");
//     const validacaoproduto = produtos.produtospedidos.some(
//       (pedido) => pedido.produto === produto
//     );
//     if (validacaoproduto === true) {
//       quantidade = Number(prompt("Insira a quantidade desejada do produto"));
//       pedidos[validacaocliente].produtospedidos(produto, quantidade);
//     }
//   } else {
//     let novoCliente = confirm("Cliente não encontrado. Deseja cadastrar-se?");
//     if (novoCliente === true) {
//       cliente;
//       produto;
//       quantidade;
//     }
//   }
// }
// (29/01/1992).toLocaleString(en-US)
// const pedidosdata  = pedidos.filter((pedido)=>pedido.data>= new Date(inicial)&& pedido.date <= new Date(final))
// const date = new Date("01/29/1992") >= new Date("01/25/1992");
// console.log(date);
function cadastrarPedido() {
  let cliente = prompt("Qual seu nome?");
  let validarCliente = pedidos.find((pedido) => pedido.cliente === cliente);
  let produto = prompt("Qual produto você deseja?");
  let validarProduto = produtos.find((x) => x.nome == produto);
  if (validarProduto) {
    let quantidade = Number(prompt("Qual quantidade você deseja?"));
    if (validarCliente) {
      validarCliente.produtospedidos.push({
        produto,
        quantidade,
      });
    } else {
      let novoCliente = confirm(
        "Cliente não encontrado, você que cadastrar um novo?"
      );
      if (novoCliente) {
        pedidos.push({
          cliente,
          produtospedidos: [{ produto, quantidade }],
        });
      } else {
        cadastrarPedido();
      }
    }

    alert("Produto adicionado com sucesso!");
  } else {
    alert("Produto não encontrado");
  }
}
//   if (validarCliente) {
//     // let produto = prompt("Qual produto você deseja?");
//     // let validarProduto = produtos.find((x) => x.nome == produto);
//     if (validarProduto) {
//       let quantidade = Number(prompt("Qual quantidade você deseja?"));

//       validarCliente.produtospedidos.push({
//         produto,
//         quantidade,
//       });
//       alert("Produto adicionado com sucesso!");
//     } else {
//       alert("Produto não encontrado");
//     }
//   } else {
//     let novoCliente = confirm(
//       "Cliente não encontrado, voce que cadastrar um novo?"
//     );
//     if (novoCliente) {
//       let produto = prompt("Qual produto você deseja?");
//       let validarProduto = produtos.find((x) => x.nome == produto);
//       if (validarProduto) {
//         let quantidade = Number(prompt("Qual quantidade você deseja?"));

//         pedidos.push({
//           cliente,
//           produtospedidos: [{ produto, quantidade }],
//         });
//         alert("Produto adicionado com sucesso!");
//         mostrarPedidos();
//       } else {
//         alert("Produto não encontrado");
//       }
//     }
//   }
// }

if (inicial === 5) {
  cadastrarPedido();
}
if (inicial === 7) {
  mostrarPedidos();
}
function mostrarPedidos() {
  console.log("Lista de pedidos:");
  pedidos.forEach((pedido) => {
    console.log(`Cliente: ${pedido.cliente}`);
    console.log(`Produtos pedidos:`);
    pedido.produtospedidos.forEach((item) => {
      console.log(`Produto - ${item.produto}, Quantidade - ${item.quantidade}`);
    });
    console.log("-------------------");
  });
}
//Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque
function somarEstoque(produtos) {
  let soma = produtos.reduce((acc, value) => {
    return acc + value.preco * value.estoque;
  }, 0);
  console.log(soma);
}
if (inicial == 6) {
  console.log(somarEstoque("Total no estoque R$ ", produtos));
}

if (inicial == 8) {
  faturamento();
}

function faturamento() {
  let totalvendas = 0;
  let faturamento = 0;
  console.log("Faturamento diario:\n-----------------");
  pedidos.forEach((pedido) => {
    console.log(`Cliente: ${pedido.cliente}`);
    console.log("Produtos pedidos:");
    pedido.produtospedidos.forEach((item) => {
      console.log(`Produto - ${item.produto}, Quantidade - ${item.quantidade}`);
      totalvendas += item.quantidade;
      let produtao = produtos.find((x) => x.nome === item.produto);
      faturamento += item.quantidade * produtao.preco;
    });
  });

  console.log("Total de itens vendidos: ", totalvendas);
  console.log("Faturamento diario: R$", faturamento.toLocaleString());
}
