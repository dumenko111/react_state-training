import React from 'react';

import css from './Counter.module.css';

class Counter extends React.Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    //метод класу має бути стрілочним для прив'язки контексту this
    //оновлювати state по ссилці не можна, тільки через метод setState
    this.setState({
      value: 666,
    });
  };

  handleDecrement = () => {};

  render() {
    return (
      <div className={css.counter}>
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
