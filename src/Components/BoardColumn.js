import React from 'react';
import '../css/BoardColumn.css'

const boardColumn = ({ onColumnClick, keyprop, children }) => {

    return (
        <div className='BoardColumn'
                onClick = { ()=>onColumnClick(keyprop) }>
                {children}
        </div>
    )
}

export default boardColumn;