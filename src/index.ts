import * as express from 'express';
import app from './app';

// Load env variables
const PORT = 8080; // Port of our web server

const router = express();

router.use(app);

// We start our web server
router.listen(PORT, () => {
  console.log(`Application listening on port http://localhost:${PORT}`);
});
