//Importações librarys
import Express from "express";
import dotenv from "dotenv";
import path from "path";
import mustache from "mustache-express";

//Importações internas
import mainRoutes from "./routes"

//configs
dotenv.config()

const server = Express();

//View engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

//pasta principal do servidor
server.use(Express.static(path.join(__dirname, "../public")))


//rotas
server.use(mainRoutes)
server.use("", (req, res) => {
    res.render('pages/404')
})




//Portas
server.listen(process.env.PORT)