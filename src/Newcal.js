import React, { Component } from "react";
import ReactDOM from 'react-dom';
//import FileBase64 from './base64';
import axios from 'axios';
let proxyurl;


let calfile1;
let calfile2;
let calfile3;
let calfile4;

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


class Newcal extends Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
   // this.getfiles() = this.getfiles().bind(this);

    if (process.env.REACT_APP_BACKEND_HOST) {
        proxyurl = process.env.REACT_APP_BACKEND_HOST; }
      else {
        proxyurl = "http://localhost:5000";
      }
  }
  getFiles(files){
    this.setState({ files: files })
  }
  
  postCal() {
    return axios.post(proxyurl + "/api/admin/calendar/", {
       name: calfile1,
       type: calfile2,
       size: calfile3,
       base64: calfile4,
       
       
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
        <div className="text-center mt-25">
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this)} 
            />
        </div>
        <div className="text-center">
          { this.state.files.map((file,i) => {
             calfile1 = file.name
             calfile2 = file.type
             calfile3 = file.size
             calfile4 = file.base64
             return null
          }) }
          <button className="load" onClick={this.postCal}>load files</button>
        </div>
      </div>
    )
  }
}

export default Newcal;