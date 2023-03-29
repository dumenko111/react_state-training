import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Value from './Value';

import css from './Counter.module.css';


class Counter extends React.Component {
  static defaultProps = {//вказую дефолтне значення для this.state.value
    initialValue: 0,
  }

  static propTypes = {
    value: PropTypes.number,
  }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    //метод класу має бути стрілочним для прив'язки контексту this
    //оновлювати state по ссилці не можна, тільки через метод setState

    // this.setState({// в setState передаємо нове значення як об'єкт тільки якщо хочемо перезаписати значення
    //   value: 666,
    // });

    this.setState((prevState) => {//в setState передаємо callback ф-цію якщо хочемо змінити state а не перезаписати
      return {
        value: prevState.value + 1,
      }
    })
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      }
    })
  };

  render() {
    return (
      <div className={css.counter}>
        <Value value={this.state.value} />

        <Controls //передаємо пропсами ф-ції для збільшення і зменшення state.value
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;
