import React, { Component } from "react";
import ReactDOM from 'react-dom';
//import FileBase64 from './base64';
import axios from 'axios';
let proxyurl;


let file1;
let file2;
let file3;
let file4;
let dvar;
let toolsid;

class FileBase64 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(e) {

    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {

      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {

        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if(allFiles.length == files.length){
          // Apply Callback function
          if(this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }

      } // reader.onload

    } // for

  }

  render() {
    return (
      <input
        type="file"
        onChange={ this.handleChange.bind(this) }
        multiple={ this.props.multiple } />
    );
  }
}

FileBase64.defaultProps = {
  multiple: false,
};

let allFilesArray = [];
class Newqi extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      allFiles: []
    }

   this.getAllFiles = this.getAllFiles.bind(this);
   this.deleteTool = this.deleteTool.bind(this);
   this.deletetoolsbk = this.deletetoolsbk.bind(this);
   this.getToolsid = this.getToolsid.bind(this);
    
   
    if (process.env.REACT_APP_BACKEND_HOST) {
        proxyurl = process.env.REACT_APP_BACKEND_HOST; }
      else {
        proxyurl = "http://localhost:5000";
      }
  }
  getFiles(files){
    this.setState({ files: files })
    console.log(this.state)
  }

  getAllFiles(){
    return axios.get(proxyurl + '/api/admin/qi')
    .then(response => {
     this.response = response.data
        for(let i = 0; i < response.data.length; i++){
          allFilesArray[i] = {name: response.data[i].name, type: response.data[i].type, size: response.data[i].size , key: response.data[i].key, base64: response.data[i].base64}
    }
    //decodedBase64 = base64.base64Decode(a, b);
    this.setState({allFiles: allFilesArray})
    console.log(allFilesArray)
    console.log(this.state.allFiles)
})
  }
  
  componentDidMount(){
    this.getAllFiles();
  }

  testqi() {
    return axios.post(proxyurl + "/api/admin/qi/", {
       name: file1,
       type: file2,
       size: file3,
       key: "123",
       base64: file4,
       
   })
 
   .then(function (response) {
   console.log(response);
   window.alert("QI Tool Added!")
   })
   .catch(function (error) {
   console.log(error);
   })
  
}

deleteTool(itemName) {
  
  console.log(allFilesArray)
 for(let i = 0; i < allFilesArray.length; i++){
   if(allFilesArray[i].name === itemName){
     allFilesArray.splice(i, 1);
     dvar = i;
   }
 }
  console.log(allFilesArray)
 this.setState({allFiles: allFilesArray})
 this.getToolsid()
}

getToolsid(){

  return axios.get(proxyurl + '/api/admin/qi')
        .then(response => {
          
         this.response = response.data
        toolsid = response.data[dvar]._id
        this.deletetoolsbk()
        
    })
  }
deletetoolsbk(){
  
    return axios.post(proxyurl + '/api/admin/deleteQi', {
      
      _id: toolsid,
      
   })
   .then(function (response) {
   console.log(response);
  
   })
   .catch(function (error) {
   console.log(error);
   })

   
  
}

  render() {
    return (
      <div>
        <h3>Upload new Quality Improvement Tool</h3>
      <div className = "row">
        <div className="text-center mt-25">
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this)} 
            />
        </div>
        <div className="text-center">
          { this.state.files.map((file,i) => {
             file1 = file.name
             file2 = file.type
             file3 = file.size
             file4 = file.base64
             return null
          }) }
          <button className="load" onClick={this.testqi}>Upload file</button>
        </div>
      </div>
      <div className = "row">
          <h3 className="currentListHeader">Current QI Tools:</h3>
            <ul className="currentList">
            {this.state.allFiles.map(item => (
              <li id={item}>
              <p>{item.name} <button id= {item.key} onClick = {this.deleteTool.bind(this, item.name)}>Delete this Tool</button></p>
              </li> 
            ))}
          </ul>
      </div>
      </div>
    )
  }
}

export default Newqi;