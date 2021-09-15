import React, { Component } from 'react';
import './App.css';

 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Jefferson'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    // this.state.nome = 'Jefferson Andrews'
    this.setState({
      nome: 'Jefferson Andrews'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <h1>App Meu Perfil</h1>

          <img src="../images/1.jpg" alt="Minha Foto" width={400} height={400}></img>

        </center>

        <blockquote>

          <h2>Dados Pessoais</h2>
          <p><b>Nome: </b>Jefferson Andrews Albuquerque Silva</p>
          <p><b>Data de Nascimento: </b>27/06/2000</p>
          <p><b>Nacionalidade: </b>Brasileiro</p>

          <br></br>

          <h2>Formação</h2>
          <p><b>Ensino médio completo: </b>Colégio Professor Diniz Martins - 2017</p>

          <p><b>Ensino Técnico em Química completo: </b>Escola 1º Primeiro de Maio - 2019</p>

          <br></br>

          <h2>Experiência</h2>

          <p><b>Colégio Adélia Camargo Corrêa: </b>Auxiliar técnico de informática – (07/2020 – 05/2021)
          (Auxílio no suporte de equipamentos para data shows, micro computadores, impressoras e cabeamento estruturado de redes).</p>

          <p><b>Secretaria Municipal de Saúde de Guarujá: </b>Estagiário de Tecnologia da Informação – (05/2021 – Atualmente)
          (Auxílio no suporte de equipamentos para data shows, micro computadores, impressoras e cabeamento estruturado de redes).</p>

          <h2>Projetos</h2>

          <p>Web-NodeJS-ReactJS</p>
          <p>Web-NodeJs-ReactJS-Projeto-Tarefa</p>
          <p>Web-NodeJs-ReactJS-Projeto-Aluno</p>


        </blockquote>
      </div>
    );
  }
}
 
export default App;
