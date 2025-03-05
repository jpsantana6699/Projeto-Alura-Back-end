import { autor }  from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
      try{
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
      } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na requisição`});
      }
    }

    static async listarAutoresPorId(req, res) {
      try{
        const id = req.params.id;
        const autorEncontrado = await autor.findById(id);
        res.status(200).json(autorEncontrado);
      } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na requisição do autor por id`});
      }
    }

    static async cadrastarAutores(req, res) {
      try{
        const novoAutor = await autor.create(req.body);
        res.status(201).json({ message: "Autor cadastrado com sucesso", 
        livro:novoAutor });
      } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao cadastrar autor`});
      }
    }

    static async atualizarAutores(req, res) {
      try{
        const id = req.params.id;
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Autor atualizado com sucesso"});
      } catch (error) {
        res.status(500).json({ message: `${error.message} - falha na atualização do Autor`});
      }
    }

    static async deletarAutores(req, res) {
      try{
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({ message: "Autor deletado com sucesso"});
      } catch (error) {
        res.status(500).json({ message: `${error.message} - falha ao deletar autor`});
      }
    }
};



export default AutorController;