import express from "express";
const router = express.Router();

// Define a rota para "/pedidos"
router.get("/pedidos", function (req, res) {
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
        {
            codigo: 5,
            valor: 5.50
        },
        {
            codigo: 6,
            valor: 15.75
        }
    ];

    // Renderiza a página "pedidos" passando o array de pedidos como contexto
    res.render("pedidos", {
        pedidos: pedidos
    });
});

export default router;
