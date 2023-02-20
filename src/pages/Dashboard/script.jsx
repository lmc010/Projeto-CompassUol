import React, { useState, useEffect } from 'react';
import "./style.css";



function Relogio() {
    const [dateState, setDateState] = useState(new Date());
useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);


    return (
        <div className="apprelogio">
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
            
            <p className='appcalendario'>
              {' '}
              {dateState.toLocaleDateString('en-US', {
                 month: 'long',
                 day: 'numeric',
                 year: 'numeric',
              })}
            </p>
        </div>
    );
}
export default Relogio;