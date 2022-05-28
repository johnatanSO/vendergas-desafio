import React, {useState} from 'react'
import './styles.scss'
import {Buildings, UsersThree, ShoppingCart} from 'phosphor-react'
import LogoImg from '../../assets/Logo.png'
import {Link} from 'react-router-dom'

export function Sidebar() {
  const [sectionActive, setSectionActive] = useState('company')
  
  return (
    <aside>
      <img className="logo" src={LogoImg} alt="Logo da página" />
      <div className={"menu"}>

        <Link className="link" to="/company"><button onClick={()=>setSectionActive('company')} className={sectionActive === 'company' ? 'menu-item active' : 'menu-item'}><Buildings className="company-icon icon" size={20} /> Empresas</button></Link>

        <Link className="link" to="/clients"><button onClick={()=>setSectionActive('clients')} className={sectionActive === 'clients' ? 'menu-item active' : 'menu-item'}><UsersThree className="clients-icon icon" size={20} /> Clientes</button></Link>

        <Link className="link" to="products"><button onClick={()=>setSectionActive('products')} className={sectionActive === 'products' ? 'menu-item active' : 'menu-item'}><ShoppingCart className="products-icon icon" size={20} /> Produtos</button></Link>
      </div>
    </aside>
  )
}