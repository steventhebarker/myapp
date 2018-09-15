import {Button} from '@material-ui/core';
import * as React from 'react';
//import Dropzone from 'react-dropzone';
import CircularProgress from '@material-ui/core/CircularProgress'
import './App.css';
import {themes, ThemeContext} from './theme-context';;

interface IState {
  imageFiles: any[],
  results: any,
  //dropzone: any,
  theme: any,
  toggleTheme: any,
  url: string
}


export default class App extends React.Component<{}, IState>{
  constructor(props: any) {
    super(props);
  
    this.state = {
      imageFiles: [],
      results: "",
      //dropzone: this.onDrop.bind(this),
      url: '',
      theme: themes.dark,
      toggleTheme: this.toggleTheme(),
    };
  }

  public toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.light
          ? themes.dark
          : themes.light,
    }));
  };

  // public onDrop(files: any) {
  //   this.setState({
  //     imageFiles: files,
  //     results: ""
  //   })
  //   const file = files[0]
  //   const reader = new FileReader();
  //   reader.onload = (readerEvt) => {
  //       const binaryString = readerEvt.target!!.result;
  //       this.upload(btoa(binaryString))
  //   };

  //   reader.readAsBinaryString(file);
  // }

  public upload(base64String: string) {
    fetch('https://danktrigger.azurewebsites.net/api/dank', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        file: base64String, 
      })
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data[0].class}))
      }
      return response
    })
  }
imageurl = '';

myFunction = (params: any) => {
  params.preventDefault();
  console.log('cheeh boi');
  fetch('https://api.thecatapi.com/v1/images/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((response : any) => {
    response.json().then((data:any) => this.setState({url: data[0].url}));
  })

};
  public render() {
    return (
      <div className="container-fluid">

      <ThemeContext.Provider value={this.state}>
      <ThemeContext.Consumer>
        {theme => (
        <div className="centreText" style={{backgroundColor: theme.theme.background, color: theme.theme.foreground}}>
          {
            /* <div className="dropZone">
            <Dropzone onDrop={this.state.dropzone} style={{position: "relative"}}>
              <div style={{height: '50vh'}}>
                {
                  this.state.imageFiles.length > 0 ? 
                    <div>{this.state.imageFiles.map((file) => <img className="image" key={file.name} src={file.preview} /> )}</div> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }  
              </div>
            </Dropzone>
          </div> */
          <form>
          <label>
          <h2>The Steve Dictionary</h2> 
          <p>Simply type the word you want the definition for.</p>
          </label> 
          <Button onClick={this.myFunction}>Click me</Button><br />          
          <img src={this.state.url}/>
          </form>
          }
          <div  className="dank">
          {
            this.state.results === "" && this.state.imageFiles.length > 0 ?
            <CircularProgress/> :
            <p>{this.state.results}</p>
          }
          </div>
        </div>
        )}
        </ThemeContext.Consumer>
        <div>
        <Button onClick={this.toggleTheme}>Change Theme</Button>
        </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}