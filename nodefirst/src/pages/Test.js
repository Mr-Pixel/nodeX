import React from 'react';
import axios from 'axios';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title:"title"
    }
  }

  render(){
    return(
      <div style={{width:100+'%',height:100+'%'}}>
        <h1>{this.state.title}</h1>
        <button style={{margin:40}} onClick={e=>this.fetchUsers()}>Test Request</button>
      </div>
    )
  }

  //functions
  fetchUsers(){
    axios.get('/api/image/resizeImg',{})
    .then(res=>{
      console.log(res);
    });
  }

}

export default Test;