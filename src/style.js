import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1024px) {
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
`;

export const Header = styled.header`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 15px;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Checkout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > div:nth-child(1) {
      order: 2;
    }
    & > div:nth-child(2) {
      order: 1;
    }
  }
`;

export const Group = styled.div`
  margin-bottom: 15px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px;
  border-color: ${(props) => (props.error ? "#ff8a80" : "black")};
  background-color: ${(props) => (props.error ? "#ffbcaf" : "white")};
  & input {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    background-color: ${(props) => (props.error ? "#ffbcaf" : "white")};
    border: none;
    outline: none;
  }
  & select {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    background-color: ${(props) => (props.error ? "#ffbcaf" : "white")};
    border: none;
    outline: none;
  }
`;

export const ContainerList = styled.div`
  padding: 10%;
  @media (max-width: 425px) {
    padding: 1%;
    padding-bottom: 5%;
  }
`;

export const PreviewList = styled.div`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 5%;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  border-radius: 10px;
  padding-bottom: 7%;
  & img {
    width: 100%;
    border-radius: 10px;
  }
  & p strong {
    color: #f9a825;
  }
  & p span {
    text-decoration: line-through;
    font-size: 0.9rem;
  }
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5%;
  & input {
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    background-color: #eeeeee;
  }
`;

export const CounterButton = styled.div`
  display: flex;
  background-color: #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
`;

export const Divider = styled.div`
  border-top: 1px solid #bdbdbd;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: #ff9800;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 35px;
  outline: none;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff9800;
    color: #ff9800;
    background-color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;
