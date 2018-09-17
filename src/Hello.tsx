import * as React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
interface IState {
  variable: any;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      variable: ""
    };
  }
  public handleChange = (event: any) => {
    this.setState({
      variable: event.target.value
    });
  };
  public render() {
    return (
      <div>
        <RadioGroup
          name="color"
          value={this.state.variable}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="default"
            control={<Radio />}
            label="default"
          />
          <FormControlLabel
            value="primary"
            control={<Radio />}
            label="primary"
          />
          <FormControlLabel
            value="secondary"
            control={<Radio />}
            label="secondary"
          />
        </RadioGroup>
        {this.state.variable}
      </div>
    );
  }
}