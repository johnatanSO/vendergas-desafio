import React from 'react'
import {Sidebar} from '../Sidebar'
import './styles.scss'
import { CompanyContainer } from '../CompanyContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ClientsContainer } from '../ClientsContainer'
import { ProductsContainer } from '../ProductsContainer'




export function Dashboard() {

  return (
    <div className="dashboard-container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path={'/'} element={<CompanyContainer />} />
          <Route path={'/company'} element={<CompanyContainer />} />
          <Route path={'/clients'} element={<ClientsContainer />} />
          <Route path={'/products'} element={<ProductsContainer />} />
        </Routes>
      </Router>
    </div>
  )
}