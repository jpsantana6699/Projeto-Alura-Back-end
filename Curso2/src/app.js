import express from "express";
import connectNaBasebase from "./config/dbConnect.js";
import routes from "./routes/index.js";
const conexao = await connectNaBasebase();

conexao.on("error", (erro) => {
  console.error(" erro de conexão", erro);
})

conexao.once("open", () => {
  console.log("Conexão com o banco feito com sucesso");
})

const app = express();
routes(app);


  export default app;

