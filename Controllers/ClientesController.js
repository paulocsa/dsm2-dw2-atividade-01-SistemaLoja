import express from "express"
const router = express.Router();

// chama a rota clientes
router.get("/clientes", function (req, res) {
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

export default router;
