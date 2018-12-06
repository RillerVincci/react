import React,{Component} from 'react'


class Post extends Component {
    constructor(){
        super();
        this.state={
            likes:0
       }
    }
componentWillMount(){
    console.log("New log will Mount")
  }
  
  componentDidMount(){
    console.log("New log")
  }
    render(){
        console.log("Post Render")
        return(
            <div className={'post'}> 
                <h2>{this.props.title}</h2>
                <small>{this.props.timer}</small>
                    <p>{this.props.children}</p>
                        <small>Likes: {this.state.likes}</small><br/>
                        <button onClick={()=> this.setState({likes:this.state.likes+1})} > Like </button>
                
            </div>
        )
    }
}

export default Post