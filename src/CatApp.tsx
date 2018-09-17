import { Button } from "@material-ui/core";
import * as React from "react";
import { themes, ThemeContext } from "./theme-context";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface IState {
  results: any;
  theme: any;
  url: string;
  discoMode: any;
  variable: any;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    console.log("constructor");
    this.state = {
      results: "",
      url: "",
      theme: themes.light,
      discoMode: "0",
      variable: ""
    };
  }

  public changeTheme = () => {
    this.setState(state => ({
      theme:
        state.discoMode === 1
          ? state.theme === themes.red
            ? themes.orange
            : state.theme === themes.orange
              ? themes.yellow
              : state.theme === themes.yellow
                ? themes.green
                : state.theme === themes.green
                  ? themes.blue
                  : state.theme === themes.blue
                    ? themes.purple
                    : themes.red
          : themes.light
    }));
    setTimeout(this.changeTheme, 500);
  };

  public toggleTheme = () => {
    this.setState(state => ({
      discoMode: state.discoMode == 0 ? 1 : 0
    }));
    this.changeTheme();
  };

  /////////////////////////////////////////////////////////
  imageurl = "";
  public showCatPhoto = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response: any) => {
      response.json().then((data: any) => this.setState({ url: data[0].url }));
    });
  };

  public showCatGif = () => {
    fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response: any) => {
      response.json().then((data: any) => this.setState({ url: data[0].url }));
    });
  };

  public showCatStatic = () => {
    fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response: any) => {
      response.json().then((data: any) => this.setState({ url: data[0].url }));
    });
  };
  public showPhoto = (params: any) => {
    if (this.state.variable === 'gif')
    {
      this.showCatGif();
    }
    else if (this.state.variable === 'static')
    {
      this.showCatStatic();
    }
    else
    {
      this.showCatPhoto();
    }
  };

  public handleChange = (event: any) => {
    this.setState({
      variable: event.target.value
    });
  }

  public render() {
    return (
      <div className="container-fluid">
          
        <ThemeContext.Provider value={this.state}>
          <ThemeContext.Consumer>
            {theme => (
        
              <div
                className="centreText"
                style={{
                  backgroundColor: theme.theme.background,
                  color: theme.theme.foreground,
                  height: 1000
                }}
              >
                {
                  <form>
                    <Button
                      onClick={this.toggleTheme.bind(this)}
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        float: "right"
                      }}
                    >
                      Toggle Disco Mode
                    </Button>
                    <br /> <br />
                    <label>
                      <h2>Welcome to The CatSpace</h2>
                      <p>Select what type of image you want, then boop the button to generate a new cat! </p>
                    </label>
                    <br />
                    <RadioGroup
            name="color"
            className = "centreRadioButtons"
            value={this.state.variable}
            onChange={this.handleChange}
            style = {{}}
          >
            <FormControlLabel
              value="any"
              control={<Radio className = "centreRadioButtons"/>}
              label="Any"
            />
            <FormControlLabel
              value="gif"
              control={<Radio className = "centreRadioButtons"/>}
              label="GIF"
            />
            <FormControlLabel
              value="static"
              control={<Radio className = "centreRadioButtons"/>}
              label="Static"
            />
          </RadioGroup>

                    <Button
                      onClick={this.showPhoto}
                      style={{ backgroundColor: "White", color: "Black" }}
                    >
                      boop me!
                    </Button>
                    <br />
                    <br />
                    <img src={this.state.url} />
                  </form>
                }
              </div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}
