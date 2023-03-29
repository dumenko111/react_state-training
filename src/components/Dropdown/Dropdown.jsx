import React, { Component } from 'react';

import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  }

  show = () => {
    this.setState({
      visible: true,
    })
  }

  hide = () => {
    this.setState({
      visible: false,
    })
  }


  render() {
    return (
      <div className={css.dropdown}>
        <h2>Випадаюче меню</h2>

        <button type='button' className={css.dropdown__toggle}
        onClick={this.show}>
          Показати
        </button>

        <button type='button' className={css.dropdown__toggle}
        onClick={this.hide}>
          Сховати
        </button>

        {this.state.visible &&
          <div className={css.dropdown__menu}>Випадаюче меню</div>}
      </div>
    )
  }
}

export default Dropdown;