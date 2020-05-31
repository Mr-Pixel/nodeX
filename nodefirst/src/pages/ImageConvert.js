import React from 'react';
import axios from 'axios';

const localHost = 'http://localhost:3002'

class ImageConvert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc:null,
      imgSrcResize:null
    };

  }

  render(){
    return(
        <div style={{display:"flex",flexDirection:"column",width:100+'%',height:100+'%',userSelect:"text"}}>
            <input 
              id="upload_file"
              style={{margin:40,height:40}}
              type='file'
              accept='image'
              onChange={(e)=>{this.onfileChange(e)}}
              />
            <button style={{margin:40,marginTop:0,width:50}} onClick={e=>{this.clickConvert(e)}}>转换</button>
            <img style={{width:400,height:400}} src={this.state.imgSrc} />
            <img style={{width:400,height:400}} src={this.state.imgSrcResize} />
        </div>
        )
    }

    // 图片选择回调
    onfileChange(e){
      let that = this;
      let aImg = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(){
        that.setState({
          imgSrc:reader.result
        });
      };
      reader.readAsDataURL(aImg);
    }

    clickConvert(){
      var file = document.getElementById("upload_file").files[0];
      var formdata1=new FormData();// 创建form对象
      formdata1.append('img',file,file.name);// 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
          headers:{'Content-Type':'multipart/form-data'}
      };  //添加请求头
      axios.post('/api/image/upload',formdata1,config).then(response=>{   //这里的/xapi/upimage为接口
          this.setState({
            imgSrcResize:localHost+'/api/image/editImg/tmp_120.png',
          })
      })
    }
}

export default ImageConvert;