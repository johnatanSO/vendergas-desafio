import React from "react";
import "./styles.scss";

export function CompanyTable({ companiesList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Razão social</th>
          <th>CNPJ</th>
        </tr>
      </thead>
      <tbody>
        {companiesList.map((company, key) => {
          return (
            <tr key={key}>
              <td>{company.fantasyName}</td>
              <td>{company.socialName}</td>
              <td>{company.cnpj}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
