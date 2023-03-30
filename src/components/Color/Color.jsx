import { Component } from 'react';

// import css from './Color.module.css'
import './color.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2, //зберігаємо тут index масиву, наприклад нульовий
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    //публічний метод з прив'язаним this, який буде добавляти css клас, якщоспівпадає index
    const optionClasses = ['ColorPicker__option']; //тут зберігаємо в масиві назву класу

    if (index === this.state.activeOptionIdx) {
      //порівнюємо початковий index зі state з тим що ми перебираємо в масиві
      optionClasses.push('ColorPicker__option--active'); //якщо index вище співпадає то пушим в масив додатковий клас
    }
    return optionClasses.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionIdx]; //беремо значення label при вибраному index

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Вибраний колір: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label} //передаємо ключі як label
              className={this.makeOptionClassName(index)} //значення класу це виклик методу класу, якому ми передали index
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActiveIdx(index);
              }} //через замикання методу setActiveIdx() буде доступний index
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
