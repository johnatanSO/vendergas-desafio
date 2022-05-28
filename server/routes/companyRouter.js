const express = require("express");
const router = express.Router();
const Company = require("../models/company");


/* const companies = [
  {fantasyName: 'Marvel', socialName: 'Marvel company', cnpj: '123456789'},
  {fantasyName: 'DC', socialName: 'DC company', cnpj: '123456789'},
  {fantasyName: 'Disney', socialName: 'Disney company', cnpj: '123456789'},
] */


router.get("/listCompanies", async (req,res)=>{
  const companies = await Company.find()
  res.send(companies)
})

router.post("/createCompany", async (req,res)=>{

  const {fantasyName, socialName, cnpj} = req.body
  if(!fantasyName || !socialName || !cnpj){
    return res.status(400).send({error: "Dados insuficientes"})
  }else{
    const companyAlreadyExists = await Company.findOne({
      $or: [{socialName}, {cnpj}],
    })
    if(companyAlreadyExists){
      return res.status(400).send({error: "Empresa já cadastrada"})
    }
  }

  try{
    await Company.create({
      fantasyName,
      socialName,
      cnpj,
    }).then((company)=>{
      return res.status(200).send({
        message: "Empresa criada com sucesso!",
        company,
      })
    })
  }
  catch(err){
    res.status(400).send({
      error: err,
      message: "Erro ao criar empresa"
    })
  }
})


module.exports = router