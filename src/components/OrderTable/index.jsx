import React from "react";


export function OrderTable({ ordersList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Pedido</th>
          <th>Cliente</th>
          <th>Data</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {ordersList.map((order, key) => {
          return (
            <tr key={key}>
              <td>{order.numberOrder}</td>
              <td>{order.client}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(order.date))}</td>
              <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.totalOrder)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
