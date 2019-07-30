import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {

    constructor() {
        super();
    }

    render() {
        return (
          <div claseName="container">
              <button onClick={this.props.increase}> Increase </button>
          
              <h4> { this.props.counter } </h4> 
          
              <button onClick={this.props.decrease}> Decrease </button>
          </div>
        );
    }
}

Counter.propTypes = {
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
};