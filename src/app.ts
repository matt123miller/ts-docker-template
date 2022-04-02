import * as express from 'express';
import * as bodyParser from 'body-parser';

import helloWorld from './hello-world';

const router = express.Router();

// configure middleware
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

// import routers
router.use('/', helloWorld);

router.get('/', (req, res, next) => {
  const fullDescription = helloWorld.stack // registered routes
    .filter((r) => r.route); // take out all the middleware
  // .map((r) => r.route.path); // get all the paths

  res.json({ message: 'Welcome to the backend!', fullDescription });
});

// anything else?

export default router;
