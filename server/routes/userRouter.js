const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
require('dotenv').config();


router.post('/createAccount', async (req, res) => {
  const { email, username, password } = req.body
  
  if(!email || !username || !password){
    return res.status(400).send({ error: 'Dados insuficientes' })
  }

  try {
    await User.create({
      email,
      username,
      password
    }).then((user)=>{
        return res.status(200).send({
        message: 'Usuário criado com sucesso!',
        user,
    })
    })
  }
  catch(err){
    res.status(400).send({error: err})
  }
})

router.post('/login', async (req, res) => {
  try{
    const { usernameOrEmail, password } = req.body
    const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }], password: password}, { username: 1, createdAt:1, email: 1 })
    

    /* const users = await User.find()
    const user = await users.find((user)=>{
      if(user.email === usernameOrEmail && user.password === password || user.username === usernameOrEmail && user.password === password){
        return user
      }
    }) */
    
    if(user){
      /* const tokenJWT = jwt.sign({_id: user._id}, process.env.PRIVATE_KEY) */

      return res.status(200).send({
        message: 'Usuário logado com sucesso!',
        user,
        /* token: tokenJWT */
      })
    }
    else{
      return res.status(400).send({
        message: 'Usuário não encontrado!',
      })
    }
  }
  catch(err){
    res.status(500).send({error: err})
  }
})

module.exports = router;