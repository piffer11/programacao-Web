const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.somar(a, b);
  res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.subtrair(a, b);
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.multiplicar(a, b);
  res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = calculadora.dividir(a, b);
  if (resultado === 'Erro: divisão por zero') {
    res.status(400).send(resultado);
  } else {
    res.send(`Resultado da divisão: ${resultado}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
