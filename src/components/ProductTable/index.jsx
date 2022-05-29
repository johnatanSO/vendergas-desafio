import React from "react";

const productsList = [
  {
    id: 1,
    name: "Produto 1",
    value: "R$ 100,00",
    description: "Descrição do produto 1",
    company: "Empresa 1",
  },
  {
    id: 2,
    name: "Produto 2",
    value: "R$ 200,00",
    description: "Descrição do produto 2",
    company: "Empresa 2",
  }
]

export function ProductTable({ companiesList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        {productsList.map((product, key) => {
          return (
            <tr key={key}>
              <td>{product.name}</td>
              <td>{product.value}</td>
              <td>{product.description}</td>
              <td>{product.company}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
