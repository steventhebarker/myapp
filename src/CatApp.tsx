import { Button } from "@material-ui/core";
import * as React from "react";
import { themes, ThemeContext } from "./theme-context";

interface IState {
  results: any;
  theme: any;
  url: string;
  discoMode: any;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    console.log("constructor");
    this.state = {
      results: "",
      url: "",
      theme: themes.light,
      discoMode: "0"
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

  imageurl = "";
  public showCatPhoto = (params: any) => {
    params.preventDefault();
    fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response: any) => {
      response.json().then((data: any) => this.setState({ url: data[0].url }));
    });
  };

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
                        backgroundColor: "#cccccc",
                        color: "black",
                        float: "right"
                      }}
                    >
                      Toggle Disco Mode
                    </Button>
                    <br /> <br />
                    <label>
                      <h2>Welcome to The CatSpace</h2>
                      <p>Click the Button to generate a new cat picture! </p>
                    </label>
                    <br />
                    <Button
                      onClick={this.showCatPhoto}
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
