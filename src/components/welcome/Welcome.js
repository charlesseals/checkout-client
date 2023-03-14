import React from 'react';

export const Welcome = () => {
    return <>
        <h1>
            <title>Vertical Card Example</title>
        </h1>
        <body>
            {/* <!-- Card --> */}
            <div class="card">
            <img src="https://picsum.photos/id/237/300/200" alt="CardImage" />
            <h2>Card Title</h2>
            <p>Some text describing the card content.</p>
            </div>
        </body>
    </>    
}