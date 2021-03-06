import React, { Fragment } from "react";
import styles from "./index.less";
import { connect } from "dva";

class Rulescontent extends React.Component {
  getdata = () => {
    const { dispatch } = this.props;
    const id = this.props.match.params.id;
    dispatch({
      type: "zcfg/getRulesContent",
      payload: id
    });
  };
  componentDidMount() {
    this.getdata();
  }
  render() {
    // console.log(this.props.zcfg.value)
    console.log(this.props.zcfg.value);
    const value = this.props.zcfg.value ? this.props.zcfg.value.data : "";
    return (
      <Fragment>
        <div className={styles.header}>
          <p className={styles.title}>{value && value.sbt}</p>
          <p className={styles.date}>2018年10月1日</p>
        </div>
        <div className={styles.content}>
          <p>****</p>
        </div>

        <div className={styles.footer}>
          <p>附件:</p>
          <ul>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
export default connect(zcfg => zcfg)(Rulescontent);
