import { useHistory } from "react-router-dom";
import { Card as CardContainer, CardBody, CardItem, CardTitle } from "./style";

export const ProdutoCard = ({ id, imagem, nome, preco }) => {
  const history = useHistory()

  return (
    <CardContainer onClick={() => history.push(`/produto/${id}`)}>
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