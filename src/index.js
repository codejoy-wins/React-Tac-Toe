import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { stat } from 'fs';
import kitty from './tenor.gif';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
            xIsNext: false,
        }
    }
    render() {
      return (
        <button className="square" onClick={()=>this.props.onClick()} >
          {this.props.value}
        </button>
      );
    }
  }

  // any time you see the square component, create JSX with access to props
  function SquareX(props){
      return (
          <button className="square" onClick={()=>props.onClick} >
              {props.value}
          </button>
      )
  }


  class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    playAgain(){
        this.setState({
            squares: Array(9).fill(null),
        })
    }

    handleClick (i) {
        let msg = ""
        if(this.state.xIsNext){
            msg = "O"
        }else{
            msg = "X"
        }
        const squareszy = this.state.squares.slice();
        if(squareszy[i]==null){
            console.log("okay");
            squareszy[i] = `${msg}`;
            this.setState({xIsNext:!this.state.xIsNext});
            this.setState({squares: squareszy});
        }
    }
        
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)} />;
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        const cat = calculateCatsGame(this.state.squares);
        // I had changed 7 to 17 resulting in a flaw in the algorithm
        // if(this.state.squares[1] ==this.state.squares[4] && this.state.squares[4] == this.state.squares[])
        let supreme;
        let xx;
        let status;
        let yy;
        let zz;
        let zy;
        if(!winner && !cat){
            supreme = "Kitty game";
            yy = <div onClick={()=>this.playAgain()}><h2>Play Again?</h2></div>

        }
        if(winner && !cat){
            // supreme = "Winner Game";
            xx = `winner is ${winner}`;
            yy = <div onClick={()=>this.playAgain()}>play again?</div>

        }
        if(winner && cat){
            // supreme = "Win State";
            xx = `winner is ${winner}`;
            yy = <div onClick={()=>this.playAgain()}>play again?</div>
        }
        
        if(cat == false && !winner){
            zy = <img src={kitty}></img>
        }
        
        else{
            status = "X's turn";
            if(winner){
                status = "";
            }else{
                if(this.state.xIsNext == undefined){
                
                }else if(this.state.xIsNext){
                    status = "O's turn"
                }else{
                    status = "X's turn"
                }
            }
            
        }
        
  
      return (
        <div>
          <div className="status" className="xp2">{status}{xx}{yy}{zz}{zy}</div>
          <div className="supreme" className="xp2">{supreme}</div>

          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {

    const myStyle = {
        "fontSize": "5vw",
        "color": "aqua",
    }

    const Credit = ()=>{
        return (
            <div style={myStyle}> <a href="https://maxjann.com">Jann Software</a></div>
        )
    }
      return (
        <div id="master">
            <div className="game" className="xp">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                {/* <div className="xp2">play </div> */}
                <ol>{/* TODO */}</ol>
                < Credit />
            </div>
            </div>
        </div>
        
      );
    }
  }

  function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

    function calculateCatsGame(squares) {
        let alive = false;
        for(let i =0; i < squares.length; i++){
            console.log(squares[i]);
            if(squares[i]==null){
                console.log("game is live");
                alive = true;
            }
        }
        console.log(alive);
        return alive;
    }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  