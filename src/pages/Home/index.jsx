import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SpanCard, SubtituloCard, SubtituloPagina } from "../../globalStyle";
import { HomeStyledSection } from "./style";
import axios from "axios";

export const Home = () => {
  const [listaBarbeiros, setListaBarbeiros] = useState();
  const [listaServicos, setListaServicos] = useState();

  async function buscarBarbeiros() {
    const { data } = await axios.get("http://127.0.0.1:5000/barbeiros");
    setListaBarbeiros(data);
  }

  async function buscarServicos() {
    const { data } = await axios.get("http://127.0.0.1:5000/servicos");
    setListaServicos(data);
  }

  useEffect(() => {
    buscarBarbeiros();
    buscarServicos();
  }, []);

  return (
    <>
      <SubtituloPagina>Barbeiros</SubtituloPagina>
      <HomeStyledSection>
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
      </HomeStyledSection>

      <SubtituloPagina>Serviços</SubtituloPagina>
      <HomeStyledSection>
        {listaServicos &&
          listaServicos.map((element) => (
            <Card key={element.id}>
              <SubtituloCard>
                Nome: <SpanCard>{element.nome}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                Descrição: <SpanCard>{element.descricao}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                Valor: R$<SpanCard>{element.valor}</SpanCard>
              </SubtituloCard>
              <SubtituloCard>
                Percentual: <SpanCard>{element.percentual_barbeiro} %</SpanCard>
              </SubtituloCard>
            </Card>
          ))}
      </HomeStyledSection>
    </>
  );
};
