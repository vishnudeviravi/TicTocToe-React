import React from 'react';
import BoardColumn from './BoardColumn';
import '../css/FullBoard.css';

const board = ({ result, onColumnClick, reset }) => {
    
    const fullBoard = result.map((item, key) => <BoardColumn key = {key}
                                onColumnClick = { onColumnClick } keyprop = { key } >{ item }</BoardColumn>)
    return (
        <div className="fullBoard">
        { fullBoard }
        <button onClick={reset}>Reset</button>
        </div>
    )
}

export default board;   