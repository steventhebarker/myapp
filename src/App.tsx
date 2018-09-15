import {Button} from '@material-ui/core';
import * as React from 'react';
import {themes, ThemeContext} from './theme-context';


interface IState {
  results: any,
  theme: any,
  toggleTheme: any,
  url: string
}


export default class App extends React.Component<{}, IState>{
  constructor(props: any) {
    super(props);
  
    this.state = {
      results: "",
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


  imageurl = '';
  showCatPhoto = (params: any) => {
    params.preventDefault();
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
          
        <div className="centreText" style={{backgroundColor: theme.theme.background, color: theme.theme.foreground, height: 1000}} >
          {
          <form>
                    <Button onClick={this.toggleTheme} style={{backgroundColor: "White", color: "Black", float: "right"}}>Change Theme</Button>
                    <br /> <br /> 
          <label>
          <h2>Welcome to The CatSpace</h2> 
          <p>Click the Button to generate a new cat picture! </p> 
          </label> 
          <br /> 
          <Button onClick={this.showCatPhoto} style={{backgroundColor: "White", color: "Black"}}>boop me!</Button>
          <br /><br />          
          <img src={this.state.url}/>
          </form>
          
          }
        </div>
        )}
        </ThemeContext.Consumer>
        <div>

        </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}