import React,{useContext, useEffect} from 'react'
import {Sidebar} from '../Sidebar'
import './styles.scss'
import { CompanyContainer } from '../CompanyContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ClientsContainer } from '../ClientContainer'
import { ProductsContainer } from '../ProductsContainer'
import {userDataContext} from '../../userDataContext'
import {api} from '../../services/api'


export function Dashboard() {
  const {token, setCompaniesList} = useContext(userDataContext);
  useEffect(() => {
    api.get("/company/listCompanies",{headers: {'Authorization': token}}).then((res) => {
      setCompaniesList(res.data);
    }).catch((err) => {
      if(err.response.status === 401){
        alert('Você não está logado!')
      }
    });
}, []);

  return (
    <div className="dashboard-container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path={'/'} element={<h1>Seja bem vindo</h1>}/>
          <Route path={'/company'} element={<CompanyContainer />} />
          <Route path={'/products'} element={<ProductsContainer />} />
          <Route path={'/clients'} element={<ClientsContainer />} />
        </Routes>
      </Router>
    </div>
  )
}