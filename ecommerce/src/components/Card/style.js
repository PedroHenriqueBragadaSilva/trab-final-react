import styled from "styled-components";

export const Card = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  margin: 10px;
  padding: 5px 40px;
  border: 1px solid red;
  color: #f1f1f1;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const CardItem = styled.div`
  width: 100px;
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 100px;
  }
  `;

export const CardTitle = styled.h5`
  margin: 0;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;
