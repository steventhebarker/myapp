import { Button } from "@material-ui/core";
import * as React from "react";
import { themes, ThemeContext } from "./theme-context";

interface IState {
  results: any;
  theme: any;
  url: string;
  discoMode: any;
}

export default class TitlePage extends React.Component<{}, IState> {
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
                      <h2 style={{ fontSize: 80, color: theme.theme.foreground }}>Welcome to The PetSpace!</h2>
                      <br />
                      <p className = "centreParagraph" style={{ fontSize: 20,color: theme.theme.foreground }}>
                        This is a website written by Steven Barker for MSA Phase
                        1. </p>
                        <p className = "centreParagraph" style={{ fontSize: 20, color: theme.theme.foreground }}>
                        It currently has a cats page and a dogs page which
                        generates random pictures of the respective animals.
                         You
                        can navigate to these pages from the navbar.
                      </p>
                      <br />
                      <a href="https://thecatapi.com/docs.html">
                        Link to cat API
                      </a>
                      <br />
                      <a href="https://thedogapi.com/docs.html">
                        Link to dog API
                      </a>
                    </label>
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
