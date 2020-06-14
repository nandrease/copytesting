import React from 'react';
import { Test } from '../../pages/index'
import Link from 'next/link';

const TestListing = ({ test }: { test: Test }) => {
    const { id, title, estimation, payout } = test;
    return (
        <>
            <div className="row test">
                <div className="col-10">
                    <Link href={`/dashboard/${id}`}>
                        <a className="test__title">
                            {title}
                        </a></Link>
                    <p className="test__desc text-muted">Estimated length: {estimation} minutes</p>
                </div>
                <div className="col-2">${payout}</div>
            </div>
        </>
    );
};

export default TestListing;