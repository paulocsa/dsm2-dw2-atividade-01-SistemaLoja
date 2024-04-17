import express from "express";
const router = express.Router();

// Define a rota para "/produtos"
router.get("/produtos", function (req, res) {
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

    // Renderiza a página "produtos" passando o array de produtos como contexto
    res.render("produtos", {
        produtos: produtos
    });
});

export default router;
