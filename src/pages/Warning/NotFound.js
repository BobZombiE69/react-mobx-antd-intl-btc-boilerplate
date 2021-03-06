import React, { Component } from 'react';
import Ts from 'Trans';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './index.scss';
export default class NotFound extends Component {
  render() {
    return (
      <div className="warning-page">
        <div className="notfound-bg" />
        <p className="warning-tip">
          <Ts transKey="common.notFoundTip" />
        </p>
        <Button style={{ marginRight: 17 }}>
          <Link to="/">
            <Ts transKey="common.goHome" />
          </Link>
        </Button>

        <Button
          type="primary"
          style={{ marginLeft: 17 }}
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          <Ts transKey="common.goBack" />
        </Button>
      </div>
    );
  }
}
