import React from 'react';
import "./Inputs.css"

function Inputs({getValue, changeItem }) {
    return <div className="input">
        <input className="form-control" value={getValue('name')} onChange={e => changeItem('name', e)} placeholder="name"/><br/>
        <input className="form-control" value={getValue('catg')} onChange={e => changeItem('catg', e)} placeholder="catg"/><br/>
        <input className="form-control" value={getValue('cost')} onChange={e => changeItem('cost', e)} placeholder="cost"/><br/>
    </div>
}

export default Inputs