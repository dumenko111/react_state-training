import React, { Component } from 'react';

import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   })
  // }

  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   })
  // }

  render() {
    const { visible } = this.state; //робимо деструктуризацію visible щоб не писати this.state.visible

    return (
      <div className={css.dropdown}>
        <h2>Випадаюче меню</h2>

        <button
          type="button"
          className={css.dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Сховати' : 'Показати'}
        </button>

        {visible && <div className={css.dropdown__menu}>Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
