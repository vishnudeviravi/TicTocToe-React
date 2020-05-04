import React, { Component } from 'react';
import Board from './Board';
import { winnerChecker } from '../Utils/WinnerChecker';
import '../css/winner.css';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = { result:Array(9).fill(null) ,winner:false, flag:false, win:null }
    }

    reset = () => {
        this.setState({result:Array(9).fill(null) ,winner:false, flag:false, win:null })
    }

    onColumnClick = (key) => {
        const { result, winner, flag } = this.state;
        let stateArray = [...result]
        let win = null;
        if (stateArray[key] !== ('X' && 'O')) {
            if((!winner && !flag)){
                stateArray[key] = 'X';
                this.setState({result:stateArray});
                this.setState({flag:true});
                win = 'X';
            }
            else if(flag && !winner) {
                stateArray[key] = 'O';
                this.setState({result:stateArray});
                this.setState({flag:false});
                win = 'O';
            }
        }
        const winnerStatus = winnerChecker(stateArray);
        if(winnerStatus) this.setState({winner:true,win});
    }
    render() {
            if (!this.state.winner) {
            return <Board result = { this.state.result } reset={this.reset} onColumnClick = { this.onColumnClick } />
            }
            return (
                <div className="winner">
                    <Board result = { this.state.result } reset={this.reset} onColumnClick = { this.onColumnClick } />
                    <h1>{this.state.win} player <span>won</span></h1>
                </div>
            )

    }
}

export default App;