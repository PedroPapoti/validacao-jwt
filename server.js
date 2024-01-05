const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Chave secreta para assinar e verificar o token (mantenha segura e não exponha)
const chaveSecreta = 'suaChaveSecretaAqui'; // Em produção, armazene em uma variável de ambiente!

// Rota para gerar o token (apenas para simular um cenário de login)
app.get('/gerar-token', (req, res) => {
  const usuario = {
    id: 1,
    nome: 'Nome do Usuário',
    email: 'usuario@email.com'
  };

  const token = jwt.sign(usuario, chaveSecreta, { expiresIn: '1h' });
  res.json({ token });
});

// Rota protegida para validar o token
app.get('/recurso-protegido', (req, res) => {
  //const token = req.headers.authorization?.split(' ')[1]; // Obtenha o token do header Authorization
    
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(' ');
    const [scheme, token] = parts;

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  jwt.verify(token, chaveSecreta, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensagem: 'Token inválido ou expirado' });
    }
    res.json({ mensagem: 'Recurso protegido acessado com sucesso!', usuario: decoded });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
