import { Card as CardContainer, CardBody, CardItem, CardTitle } from "./style";

export const ProdutoCard = ({ imagem, nome, preco }) => {
  return (
    <CardContainer>
      <CardBody>
      <CardItem>
          <img src={imagem} alt="Imagem" />
        <CardTitle>{nome}</CardTitle>
        <CardTitle>R${preco}</CardTitle>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};