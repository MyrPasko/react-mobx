import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

// Logic outside of component. For some reason does not works.
// const counterState = observable({
//   count: 0,
// });
//
// counterState.incrementHandler = function () {
//   this.count++;
// };
//
// counterState.decrementHandler = function () {
//   this.count--;
// };

@observer
class App extends Component {

// Logic inside component
  @observable count = 0;
  countIncrementHandler = () => this.count++;
  countDecrementHandler = () => this.count--;

  // Logic outside of component. For some reason does not works.
  // countIncrementHandler = () => { this.props.store.incrementHandler() };
  // countDecrementHandler = () => { this.props.store.decrementHandler() };

  render() {

    return (
      <div className="App">
        <h1>{this.count}</h1>
        <button onClick={this.countIncrementHandler}>+1</button>
        <button onClick={this.countDecrementHandler}>-1</button>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
