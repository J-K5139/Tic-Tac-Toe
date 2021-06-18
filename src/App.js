import React,{useState} from 'react';
import Board from './components/Board';
import './styles/root.scss';
import {calculateWinner} from "./helpers";
import Square from "./components/Square";

const App = () => {

    const [board, setboard] = useState(Array(9).fill(null));
    console.log(board);
    const [isXNext, setisXNext] = useState(false);

    const winner = calculateWinner(board);
    console.log(winner);
    const declare = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O' }`;

    const handleSquareClick = position => {
        if (board[position] || winner!==null) {
            return;
        }

        setboard(prev => {
            console.log(position);
            return prev.map((square, pos) => {
                if (pos === position) {
                    return isXNext ? 'X' : 'O';
                }
                return square;
            });
        });
        setisXNext(prev => !prev);
    };


                return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
        <h3>{declare}</h3>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
