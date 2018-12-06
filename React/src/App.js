import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Post from './components/posts'

const FrasesArray = [
  {
      title:'Post 1',
      timer: '13:00',
      text:'Esse é o meu texto'
  },
  {
      title:'Post 2',
      timer: '13:00',
      text:'Esse é o meu texto 2.0'
  },
  {
      title:'Post 3',
      timer: '13:00',
      text:'Esse é o meu texto 3.0'
  }
];


class App extends Component {

  constructor(){
    super();
    this.state={
        postArray:[]
    }
}


componentWillMount(){
  console.log("New log will Mount")
}

componentDidMount(){
  console.log("New log")
  const newState = {
    postArray : FrasesArray //primeiro a const e segundo o valor 
  }
  this.setState(newState)
}
  
  render() {
    console.log("Body Render")
    return (
      <div className={'App'} >
           
           {
             this.state.postArray.map(post=>{
               return(
                <Post 
                title={post.title} 
                time={post.timer}>
                {post.text}
          </Post>

               )
             })
           }
      </div>
    );
  }
}

export default App;
