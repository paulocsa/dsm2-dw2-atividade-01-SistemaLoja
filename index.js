// importando o express
const express = require("express"); 

// iniciando o express
const app = express();

// define a pasta public para uso global
app.use(express.static('public'));



// indica ao express que deve ser renderizado as paginas em EJS
app.set('view engine', 'ejs');

// chama a rota principal
app.get("/",function(req, res){
    res.render("index")
});

// chama a rota clientes
app.get("clientes",function(req, res){
    res.render("clientes");
});

// chama a rota produtos
app.get("produtos",function(req, res){
    res.render("produtos");
});

// chama a rota pedidos
app.get("pedidos",function(req, res){
    res.render("pedidos");
});




// iniciando o servidor
app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("O servidor foi iniciado")
    }
});
