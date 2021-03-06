import React, { Component } from "react";
import { connect } from "dva";
import Add from "../../components/submissionAdd/index";
import submission from "../../components/submission";

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = value => {
    console.log("lpf");
    this.props.dispatch({
      type: "submission/handleSubmit",
      payload: value
    });
  };
  render() {
    const a = 1;
    return (
      <div>
        <Add handleSubmit={this.handleSubmit} tag={a} />
      </div>
    );
  }
}
export default connect(({ submission }) => ({ submission }))(Submission);
