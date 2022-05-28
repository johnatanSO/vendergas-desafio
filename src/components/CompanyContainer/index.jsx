import React, { useState, useEffect } from "react";
import "./styles.scss";
import { CompanyTable } from "../CompanyTable";
import { api } from "../../services/api";
import {Buildings} from 'phosphor-react'

export function CompanyContainer() {
  const [fantasyName, setFantasyName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    api.get("/company/listCompanies").then((res) => {
      setCompaniesList(res.data);
    });
  }, []);

  async function createNewCompany(e) {
    e.preventDefault();
    if (!fantasyName || !socialName || !cnpj) {
      alert("Preencha todos os campos por favor!");
      return;
    }

    await api.post("/company/createCompany", {
        fantasyName,
        socialName,
        cnpj,
      })
      .then((res) => {
        setCompaniesList([...companiesList, res.data.company]);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert(err.response.data.error);
        }
      });
    setFantasyName("");
    setSocialName("");
    setCnpj("");
  }

  return (
    <div className="company-container">
      <div className="company-header">
        <form>
          <h2>Cadastrar nova empresa</h2>
          <input
            value={fantasyName}
            onChange={(e) => setFantasyName(e.target.value)}
            placeholder="Nome fantasia"
            type="text"
          />

          <input
            value={socialName}
            onChange={(e) => setSocialName(e.target.value)}
            placeholder="Razão social"
            type="text"
          />

          <input
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="CNPJ"
            type="text"
          />

          <button onClick={createNewCompany} type="submit">
            Cadastrar
          </button>
        </form>
        <Buildings size={200}/>
      </div>
      <div className="company-body">
        <h3>Lista de empresas</h3>

        <CompanyTable companiesList={companiesList} />
      </div>
    </div>
  );
}
