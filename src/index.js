import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable, configure, action } from 'mobx';
import { observer } from 'mobx-react';

configure({ enforceActions: 'observed' });

const nickName = observable({
  firstName: 'Myroslav',
  age: 32,

  get getNickName() {
    console.log('[Computed nickName]');
    return `${this.firstName} - ${this.age}`;
  },

  increment() {
    this.age++;
  },

  decrement() {
    this.age--;
  }
}, {
  increment: action,
  decrement: action,
});


@observer
class App extends Component {

  countIncrementHandler = () => this.props.store.increment();
  countDecrementHandler = () => this.props.store.decrement();

  render() {

    return (
      <div className="App">
        <h1>{this.props.store.getNickName}</h1>
        <h1>{this.props.store.age}</h1>
        <button onClick={this.countIncrementHandler}>+1</button>
        <button onClick={this.countDecrementHandler}>-1</button>
      </div>
    );
  }
}


ReactDOM.render(<App store={nickName}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
