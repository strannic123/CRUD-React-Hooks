import React from 'react';

function Button({ type, typeFunc}) {
    return <div>
        <span><button className='btn btn-outline-secondary' onClick={typeFunc}>{type}</button></span>
    </div>


}

export default Button;