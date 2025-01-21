import axios from "axios";
import { useState } from "react";

export const AdicionarBarbeiro = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  async function cadastrarBarbeiro(event) {
    event.preventDefault();
    const novo_barbeiro = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
    };
    await axios.post("http://127.0.0.1:5000/barbeiros", novo_barbeiro);
  }

  return (
    <>
      <h1>Adicionar novo Barbeiros</h1>
      <form onSubmit={cadastrarBarbeiro}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome"
            onChange={({ target }) => setNome(target.value)}
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite o cpf"
            onChange={({ target }) => setCpf(target.value)}
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Digite o telefone"
            onChange={({ target }) => setTelefone(target.value)}
          />
        </div>

        <button>Enviar</button>
      </form>
    </>
  );
};
