const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello, World!');
});

app.get('/sobre', (req, res) => {
    res.send('Pinguins são aves aquáticas do Hemisfério Sul, adaptadas para nadar em águas geladas. Conhecidos por sua fidelidade, muitos pinguins formam pares monogâmicos, retornando ao mesmo parceiro a cada temporada de acasalamento. Eles compartilham tarefas como incubar ovos e cuidar dos filhotes, demonstrando fortes laços familiar.');
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})