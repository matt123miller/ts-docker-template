import * as express from 'express';

const router = express.Router();

// We add a test route
router.get('hello-world', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello World',
  });
});

router.post('hello-world', (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

router.get('hello-world/:name', (req: express.Request, res: express.Response) => {
  const { name } = req.params;
  res.json({
    message: `Hello ${name}!`,
  });
});

export default router;
