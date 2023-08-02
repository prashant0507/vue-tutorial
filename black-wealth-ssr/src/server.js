// const express = require('express');

// const server = express();

// server.get('*', (req, res) => {
// const html = `
// <html>
//     <head>
//         <title>
//         Black Wealth with SSR
//         </title>
//     </head>
//     <body>
//         HELLO 
//     </body>
// </html>
// `;
// res.end(html);
// });

// server.listen(8080);


import express from 'express';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

const server = express();

server.get('/', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`,
  });

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">he</div>
      </body>
    </html>
    `);
  });
});

server.listen(3000, () => {
  console.log('ready');
});
