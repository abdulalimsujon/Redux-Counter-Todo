import React from 'react';
import Count from '../components/Count';



const CounterPage = () => {
    return (
        <div className='container mt-5'>

            <div className="row d-flex justify-content-center">
                <div className="col-mf-6">
                    <Count></Count>
                   
                </div>
              
            </div>

            
        </div>
    );
};

export default CounterPage;