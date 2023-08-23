import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import App from 'app.jsx'

function App() {
  
  async function questions() {
    try {
      
        const response = await fetch("https://opentdb.com/api.php?amount=30&category=15"); //chamei api
        const data = await response.json(); //chamei o response.json
        const questions = data.data.questions; //variavel questão 
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];

   
        const questaoContainer = document.getElementById("questaoContainer");
        questaoContainer.innerHTML = `
            <h2>${questions.question}</h2> 
     
            <h3>${questions.correct_answer}</h3>
          
        `;
        //chamei os dados da questão e da resposta correta.
    } catch (error) {
        console.error("Erro ao obter a api:"+ error);
    }
    //erro caso eu não consiga acessar a api.
}


  
  return (
    <>
     
     <Header></Header>
     <button onClick={questions}>Obter questão</button>

     <Footer></Footer>
    </>
  )
}

export default App
