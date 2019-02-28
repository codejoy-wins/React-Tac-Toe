import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
  
  class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick (i) {
        let msg = ""
        if(this.state.xIsNext){
            msg = "O"
        }else{
            msg = "X"
        }
        const squareszy = this.state.squares.slice();
        squareszy[i] = `${msg}`;
        this.setState({xIsNext:!this.state.xIsNext});
        this.setState({squares: squareszy});
    }
        
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)} />;
    }

    render() {
      let status = "Next is: X";
        if(this.state.xIsNext == undefined){
            
        }else if(this.state.xIsNext){
            status = "Next is: O"
        }else{
            status = "Next is: X"
        }
  
      return (
        <div>
          <div className="status">{status}</div>
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
            {this.renderSquare(17)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  