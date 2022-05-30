import React,{useEffect} from 'react'

export function WelcomeScreen() {
  useEffect(() => {
    document.title = 'Bem vindo!'
    localStorage.removeItem('sectionActive')
  },[])
  return (
    <div>Bem vindo!</div>
  )
}