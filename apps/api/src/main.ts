/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { v4 as uuid } from 'uuid';
import { Test, Tester } from '../../../libs/data/src/lib/data';

const app = express();

const tests: Test[] = [
  {
    id: uuid(),
    title: 'Manual co: Pricing page',
    payout: 25,
    estimation: 11,
    noTestersNeeded: 15,
    noTestersWorking: 15,
    testers: []
  },
  {
    id: uuid(),
    title: 'CXL Practitioners',
    payout: 25,
    estimation: 7,
    noTestersNeeded: 15,
    noTestersWorking: 2,
    testers: []
  },
  {
    id: 'my-test-123',
    title: 'Manual co: Pricing page 1',
    payout: 25,
    estimation: 11,
    noTestersNeeded: 15,
    noTestersWorking: 15,
    testers: [ 'my-user-123' ]
  }
];

const currentUser: Tester = {
  id: 'my-user-123',
  name: 'Na An',
  finishedTests: [ 'my-test-123' ],
  currentTests: []
};

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/tests', (req, res) => {
  const availableTests = tests.filter(t => !t.testers.includes(currentUser.id));
  res.send(availableTests);
});

app.get('/api/tests/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    return res.send(tests.find(t => t.id === id));
  }
});

app.get('/api/:userId/tests', (req, res) => {
  const { userId } = req.params;
  const myTests = tests.filter(t => t.testers.includes(userId));
  if (myTests.length) {
    res.send(myTests);
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
