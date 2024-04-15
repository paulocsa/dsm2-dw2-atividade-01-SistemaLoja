// importando o express
const express = require("express"); 

// iniciando o express
const app = express();

// define a pasta public para uso global
app.use(express.static('public'));

// indica ao express que deve ser renderizado as páginas em EJS
app.set('view engine', 'ejs');

// chama a rota clientes
app.get("/clientes", function(req, res) {
    // Array de clientes
    var clientes = [
        {
            codigo: 1,
            nome: "Carlos",
            cpf: "210.450.710-30",
            endereco: "Rua Pereira Estéfano"
        },
        {
            codigo: 2,
            nome: "Leandro",
            cpf: "596.805.120-53",
            endereco: "Avenida Afonso Pena"
        },
        {
            codigo: 3,
            nome: "Lucas",
            cpf: "617.610.380-01",
            endereco: "Avenida Rio Branco"
        },
        {
            codigo: 4,
            nome: "João",
            cpf: "726.581.530-07",
            endereco: "Avenida Tocantins"
        },
        {
            codigo: 5,
            nome: "Maria",
            cpf: "123.456.789-10",
            endereco: "Rua das Flores"
        },
        // Adicione mais objetos aqui conforme necessário
        {
            codigo: 6,
            nome: "Ana",
            cpf: "987.654.321-00",
            endereco: "Rua dos Passarinhos"
        },
        {
            codigo: 7,
            nome: "Pedro",
            cpf: "123.789.456-01",
            endereco: "Avenida das Árvores"
        }
    ];
    // Renderiza a página clientes passando o array de clientes como contexto
    res.render("clientes", {
        clientes: clientes
    });
});

// chama a rota produtos
app.get("/produtos", function(req, res) {
    // Array de produtos
    var produtos = [
        {
            nome: 'Caneta',
            preco: 1.50,
            categoria: 'Escolar'
        },
        {
            nome: 'Caneca',
            preco: 10,
            categoria: 'Personalizados'
        },
        {
            nome: 'Camisetas',
            preco: 25,
            categoria: 'Vestuário'
        },
        {
            nome: 'Borracha',
            preco: 1,
            categoria: 'Escolar'
        },
        // Adicione mais objetos aqui conforme necessário
        {
            nome: 'Lápis',
            preco: 0.50,
            categoria: 'Escolar'
        },
        {
            nome: 'Caderno',
            preco: 5,
            categoria: 'Escolar'
        }
    ];
    // Renderiza a página produtos passando o array de produtos como contexto
    res.render("produtos", {
        produtos: produtos
    });
});

// chama a rota pedidos
app.get("/pedidos", function(req, res) {
    // Array de pedidos
    var pedidos = [
        {
            codigo: 1,
            valor: 2.99
        }, 
        {
            codigo: 2,
            valor: 6.99
        }, 
        {
            codigo: 3,
            valor: 7.99
        }, 
        {
            codigo: 4,
            valor: 10.99
        },
        // Adicione mais objetos aqui conforme necessário
        {
            codigo: 5,
            valor: 5.50
        },
        {
            codigo: 6,
            valor: 15.75
        }
    ];

    // Renderiza a página pedidos passando o array de pedidos como contexto
    res.render("pedidos", {
        pedidos: pedidos
    });
});

// chama a rota principal
app.get("/", function(req, res) {
   
    res.render("index");
});

// iniciando o servidor
const server = app.listen(8080, function(erro) {
    if(erro) {
        console.log("Ocorreu um erro");
    } else {
        console.log("O servidor foi iniciado em http://localhost:8080");
    }
});
