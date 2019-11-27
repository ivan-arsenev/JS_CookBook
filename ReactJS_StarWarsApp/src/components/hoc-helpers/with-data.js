import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      getData().then(data => {
        this.setState({
          data
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;

/**

*Компоненты высшего порядка*

*> функция которая создает компоненты и обарачивает существуеюзие*

*const hoc = (Wrapped) => {*

*return class extends Component {*

*render() {*

*return <Wrapped {..this.props}*

*}*

*}*

*}*

**/
