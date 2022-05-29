import React, { useState, useContext } from "react";
import { ProductTable } from "../ProductTable";
import {ShoppingCart} from 'phosphor-react'
import {userDataContext} from '../../userDataContext'


export function ProductsContainer() {
  const [productName, setProductName] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("")
  const [company, setCompany] = useState("")
  const {token, companiesList} = useContext(userDataContext);

  /* useEffect(() => {
    api.get("/company/listCompanies",{headers: {'Authorization': token}}).then((res) => {
      setCompaniesList(res.data);
    }).catch((err) => {
      if(err.response.status === 401){
        alert('Você não está logado!')
      }
    });
  }, []); */

  async function createNewProduct(e) {
    e.preventDefault();
    if (!productName || !value || !description) {
      alert("Preencha todos os campos por favor!");
      return;
    }
    console.log({
      productName,
      value,
      description,
      company
    })

   /*  await api.post("/company/createCompany", {
        productName,
        value,
        description,
      })
      .then((res) => {
        setCompaniesList([...companiesList, res.data.company]);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert(err.response.data.error);
        }
      }); */
    setProductName("");
    setValue("");
    setDescription("")
  }

  return (
    <div className="main-container">
      <div className="main-header">
        <form>
          <h2>Cadastrar novo produto</h2>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nome do produto"
            type="text"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor do produto"
            type="text"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do produto"
            type="text"
          />
          <select onChange={(e)=>{setCompany(e.target.value)}} placeholder="Selecione uma opção por favor" className="select-container" name="companies" id="companies">
            
            {companiesList.map((company, key)=>{
              return <option className="option" key={key} value={company ? company.fantasyName : 'Default'}>{company?company.fantasyName:'Default'}</option>
            })}
          </select>

          <button onClick={createNewProduct} type="submit">
            Cadastrar
          </button>
        </form>
        <ShoppingCart size={200} />
      </div>
      <div className="main-body">
        <h3>Lista de produtos</h3>

        <ProductTable companiesList={companiesList} />
      </div>
    </div>
  );
}
