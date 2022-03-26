import express from 'express';

const PORT = 8080; // Port of our web server

const app = express(); // We create an instance of express

// We add a test route
app.get('/hello-world', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello World',
  });
});

app.get('/hello-world/:name', (req: express.Request, res: express.Response) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}!`,
  });
});

// We start our web server
app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
