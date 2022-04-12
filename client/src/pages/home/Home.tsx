import React from 'react';

const HomePage = () => {
    return (
        <div className={"main"}>
            {new Array(9)
                .fill(0)
                .map((el, ix) =>
                    <div key={ix} style={{padding: '1rem 3rem', fontSize: 'bold'}}>
                        {ix}
                    </div>)
            }
        </div>
    );
};

export default HomePage;
