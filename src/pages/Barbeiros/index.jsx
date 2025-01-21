import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloPagina } from "../../globalStyle";
import { BarbeiroBotaoAdd, BarbeirosStyledSection } from "./style";
import axios from "axios";

export const Barbeiros = () => {
  const [listaBarbeiros, setListaBarbeiros] = useState();

  async function buscarBarbeiros() {
    const { data } = await axios.get("http://127.0.0.1:5000/barbeiros");
    setListaBarbeiros(data);
  }

  useEffect(() => {
    buscarBarbeiros();
  }, []);

  return (
    <>
      <SubtituloPagina>Barbeiros</SubtituloPagina>
      <BarbeirosStyledSection>
        {listaBarbeiros &&
          listaBarbeiros.map((element) => (
            <Card key={element.id}>
              <SubtituloCard>
                Nome: <SpanCard>{element.nome}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                CPF: <SpanCard>{element.cpf}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                Telefone: <SpanCard>{element.telefone}</SpanCard>
              </SubtituloCard>
            </Card>
          ))}

        <BarbeiroBotaoAdd to={"/barbeirosAdd"}>
          <Card>
            <p>Adicionar Barbeiro</p>
          </Card>
        </BarbeiroBotaoAdd>
      </BarbeirosStyledSection>
    </>
  );
};
