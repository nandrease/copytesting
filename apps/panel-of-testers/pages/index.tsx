import React, { useState, useEffect } from 'react';
import TestListing from '../components/tests/TestListing'
import { Test } from '../../../libs/data/src/lib/data'

import './index.css';

export const Index = () => {
  const [newTests, setNewTests] = useState<Test[]>([])
  const [myTests, setMyTests] = useState<Test[]>([])
  const userId = 'my-user-123'

  useEffect(() => {
    fetch('/api/tests')
      .then(r => r.json())
      .then(r => setNewTests(r))

    fetch(`/api/${userId}/tests`)
      .then(r => r.json())
      .then(r => setMyTests(r))
  }, [])

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
