import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Test } from '../../../../libs/data/src/lib/data';

const TestPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [test, setTest] = useState<Test>(null)
    useEffect(() => {
        fetch(`/api/tests/${id}`)
            .then(r => r.json())
            .then(r => setTest(r))
    }, [id]);

    const launchTest = () => console.log('Launching ' + test.id);

    return test ? (
        <section>
            <h2>{test.title}</h2>
            <p>Estimated length: {test.estimation} minutes</p>
            <p>Payout: ${test.estimation}</p>
            <p>Testers required: ${test.noTestersNeeded}</p>
            <p>Testers working: {test.noTestersWorking}</p>
            <button onClick={launchTest}>Launch the test now</button>
        </section>
    ) : null;
};

export default TestPage;