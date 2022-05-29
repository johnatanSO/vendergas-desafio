import React, { useState, useContext } from "react";
import { CompanyTable } from "../CompanyTable";
import { api } from "../../services/api";
import {Buildings} from 'phosphor-react'
import {userDataContext} from '../../userDataContext'


export function CompanyContainer() {
  const [fantasyName, setFantasyName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const {companiesList, setCompaniesList} = useContext(userDataContext);

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
    <div className="main-container">
      <div className="main-header">
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
      <div className="main-body">
        <h3>Lista de empresas</h3>

        <CompanyTable companiesList={companiesList} />
      </div>
    </div>
  );
}
