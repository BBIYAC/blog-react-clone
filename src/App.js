/* eslint-disable */
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [titles, changeTitle] = useState(['여자 코트 추천', '여자 니트 추천', '여자 원피스 추천']);
  let [likes, changeLike] = useState([0, 0, 0]);

  function FuncCountUp(index){
    var likesUp = [...likes];
    likesUp[index] += 1;
    changeLike(likesUp);
  }

  // function FuncNewPost(){
  //   var likesUp = [...likes];
  //   likesUp.push(1120)
  //   changeLike(likesUp);
  // }

  // function FuncChangeTitle(){
  //   var newTitles = [...titles];
  //   newTitles[0] = '남자 코트 추천';
  //   changeTitle(newTitles);
  // }

  return (
    <div className="App">
      <div className="black-nav">BBIYAC</div>
      <div className="list">
        <h3>{ titles[0] } <span style={{cursor : 'pointer'}} onClick={ ()=>FuncCountUp(0) }>👍</span> { likes[0] } </h3>
        <p>9월 28일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ titles[1] } <span style={{cursor : 'pointer'}} onClick={ ()=>FuncCountUp(1) }>👍</span> { likes[1] } </h3>
        <p>9월 22일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ titles[2] } <span style={{cursor : 'pointer'}} onClick={ ()=>FuncCountUp(2) }>👍</span> { likes[3] } </h3>
        <p>8월 15일 발행</p>
        <hr/>
      </div>

      <Modal />
    </div>
  );
}

function Modal(){
  return(
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div>Use fragments</div>
    </>
  );
}

export default App;
