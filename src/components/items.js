import React, { useState } from "react";
// Images
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
// Components
import {
  PreviewList,
  Item,
  ContainerList,
  Title,
  Divider,
  Table,
} from "../style";
import { CounterItems } from "../components/counterItems";

export const Items = () => {
  const shipping = 19;
  const [total, setTotal] = useState(shipping);

  const itemsSelected = [
    {
      name: "Vintage Backbag",
      price: 94.99,
      ofertPrice: 60,
      photo: photo1,
    },
    {
      name: "Levi Shoes",
      price: 124.99,
      ofertPrice: 75,
      photo: photo2,
    },
  ];

  return (
    <div>
      <ContainerList>
        <PreviewList>
          {itemsSelected.map((item, index) => (
            <Item key={index}>
              <img src={item.photo} alt="" />
              <div>
                <Title>{item.name}</Title>
                <p>
                  <strong>${item.ofertPrice} </strong>
                  <span>${item.price}</span>
                </p>
                <CounterItems
                  setTotal={setTotal}
                  total={total}
                  price={item.ofertPrice}
                />
              </div>
            </Item>
          ))}
          <Divider />
          <Table>
            <thead>
              <tr>
                <th>Shipping</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${shipping}</td>
              </tr>
            </tbody>
          </Table>
          <Divider />
          <Table>
            <thead>
              <tr>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${total}</td>
              </tr>
            </tbody>
          </Table>
        </PreviewList>
      </ContainerList>
    </div>
  );
};
