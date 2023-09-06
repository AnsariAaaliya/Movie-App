import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import ReplayIcon from '@mui/icons-material/Replay';
import { useState } from 'react';
import Button from '@mui/material/Button';



export function TicTacToe(){
    const { width, height } = useWindowSize()

  const [board, setBoard]= useState([null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
]);
const [isXTurn, setIsXTurn]= useState(true);
const handleClick = (index)=>{
  console.log("clicked",index);
  //if x's turn then display x or else o
  //update only untouched boxes.
  //continue until no winner
  if(!winner && !board[index]){
  const boardCopy = [...board];
  boardCopy [index]= isXTurn ? "X" : "O";
  setBoard(boardCopy)
  setIsXTurn(!isXTurn);
  }

};

const decideWinner=(board)=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],

    ];
    for (let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      //if all three are equal  and not null
      if(board[a] !== null && board[a] === board[b] && board[a]=== board[c]){
        console.log("winner is ", board[a]);
        return board[a];
      }


    }
    //when no winner is returnd
    return null;
};
const winner =  decideWinner(board);
  return(
    <div className='tic-tac-toe'>
      { winner ? <Confetti
     width={width}
    height={height}
  /> : ""}
    <div className='board'>
{/* 1. <GameBox val="X"/>
   <GameBox val="O"/>
   <GameBox val="X"/>
   
    <GameBox val="X"/>
    <GameBox val="O"/>
    <GameBox val="X"/>
  
     <GameBox val="X"/>
     <GameBox val="O"/>
  <GameBox val="X"/>* we remove it beacuse we using state in GameBox function
      {/* 2. <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox />
      <GameBox /> we cut it because we using map function beacuse it is repeating nine time
*/}
{board.map((val,index)=>(
<GameBox val={val} onPlayerClick={()=>handleClick(index)} />
))}
   
     </div>
    { winner ? <h2>The winner is {winner}</h2> : ""}
    { winner ? <Button
     variant='outlined'
     onClick={()=>setBoard([   null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    null,])
    
  }
  startIcon={<ReplayIcon />}
    >
Re-start
    </Button> : ""}
     <Button
    variant='outlined'
    onClick={()=>setIsXTurn(true)}>
      Choose X
    </Button> 
    <Button
    variant='outlined'
    onClick={()=>setIsXTurn(false)}>
Choose O
    </Button>
   
     </div>

  );
  }

  function GameBox({val,onPlayerClick}){
    //let val = "X"; we cut it becaue we use value as porps in upper line
   //const [val, setVal]= useState(null)
    const styles = { color: val === "X" ? "green" : "red" };//conditional styling
    return( <div style={styles} onClick={()=>onPlayerClick()} className='game-box'>
      {val}
    </div>
    );}