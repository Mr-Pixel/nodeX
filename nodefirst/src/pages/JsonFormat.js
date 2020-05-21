import React from 'react';
import ReactJson from 'react-json-view';

class JsonFormat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonValue:{"test":123,"test1":"value"}
    };

    this.rawInputRef = React.createRef();
    this.jsonInputRef = React.createRef();

  }

  render(){
    return(
        <div style={{display:"flex",flexDirection:"row",width:100+'%',height:100+'%',userSelect:"text"}}>
            {/* raw string   */}
            <textarea ref={this.rawInputRef} style={{width:400,height:400,backgroundColor:"#f4f4f4"}} placeholder={"Please enter json string."} />

            <button style={{margin:40,height:40}} onClick={e=>this.convertStringToJson()}>Convert</button>

            {/* format json */}
            <ReactJson ref={this.jsonInputRef} style={{width:400,height:400,backgroundColor:"#f4f4f4"}} src={this.state.jsonValue} />
        </div>
        )
    }

    convertStringToJson(){
        let rawStr = this.rawInputRef.current.value;
        let tmpJson = JSON.parse(rawStr);
        console.log(tmpJson);
        
        this.setState({
            jsonValue:tmpJson,
        });
    }
}

export default JsonFormat;