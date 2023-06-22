import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Welcome = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome to land khada</h1>
            <Link href='/test' method='GET'>TEst</Link>
        </div>
    );
};

export default Welcome;
