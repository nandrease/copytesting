import React from 'react';
import { v4 as uuid } from 'uuid';
import TestListing from '../components/tests/TestListing'

import './index.css';

interface Tester {
  id: string;
  name: string;
  finishedTests: string[];
  currentTests: string[];
}

export interface Test {
  id: string,
  title: string,
  payout: number,
  estimation: number,
  noTestersNeeded: number,
  noTestersWorking: number,
  testers: Tester[]
}

const newTests: Test[] = [
  {
    id: uuid(),
    title: "Manual co: Pricing page",
    payout: 25,
    estimation: 11,
    noTestersNeeded: 15,
    noTestersWorking: 15,
    testers: []
  },
  {
    id: uuid(),
    title: "CXL Practitioners",
    payout: 25,
    estimation: 7,
    noTestersNeeded: 15,
    noTestersWorking: 2,
    testers: []
  }
]

const myTests: Test[] = [
  {
    id: uuid(),
    title: "Manual co: Pricing page",
    payout: 25,
    estimation: 11,
    noTestersNeeded: 15,
    noTestersWorking: 15,
    testers: []
  }
]

export const Index = () => {
  return (
    <>
      <div className="row">
        <section className="col-md-6">
          <h2>Tests available:</h2>
          <ul className="list-group">
            {newTests.map((t) => (
              <li key={t.id} className="new-test list-group item">
                <TestListing test={t} />
              </li>
            ))}
          </ul>
        </section>
        <section className="col-md-6">
          <h2>Tests previously taken:</h2>
          <ul className="list-group">
            {myTests.map((t) => (
              <li key={t.id} className="my-test list-group item">
                <TestListing test={t} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Index;
