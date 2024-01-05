const axios = require('axios'); // Você pode instalar via npm: npm install axios

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6Ik5vbWUgZG8gVXN1w6FyaW8iLCJlbWFpbCI6InVzdWFyaW9AZW1haWwuY29tIiwiaWF0IjoxNzA0NDc4MTE3LCJleHAiOjE3MDQ0ODE3MTd9.DBf7wgxX8YviAthP5cUyyUquyEmQMQZ0y8BzBpFje4Y';
// Defina a URL da rota protegida
const URL_PROTEGIDA = 'http://localhost:3000/recurso-protegido';

// Configuração para enviar o token no cabeçalho 'Authorization'
const config = {
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
};

// Faça uma solicitação GET à rota protegida
axios.get(URL_PROTEGIDA, config)
  .then(response => {
    console.log('Resposta:', response.data);
  })
  .catch(error => {
    console.error('Erro:', error.response.data);
  });
