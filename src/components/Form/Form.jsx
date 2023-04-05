import { Component } from 'react';
import { nanoid } from 'nanoid'; //бібліотека для генерування id/в даносу випадку було б потрібно, якщоб інпут не був обгорнутий в лабел

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  NameId = nanoid(); //генеруємо id для форми
  TagId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget; //деструктуризація з e.currentTarget властивостей name i value
    // this.setState({[e.currentTarget.name]: e.currentTarget.value}) //використовуємо [обчислювальну властивість об'єкту] ч/з e.currentTarget.name
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitHandler(this.state); //передаємо в проп до App з  state з цього компоненту Form
    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.target.checked);
    this.setState({ licence: e.target.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.NameId}>
          {' '}
          Ім'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.NameId}
          />
        </label>

        <label htmlFor={this.TagId}>
          {' '}
          Прізвисько
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.TagId}
          />
        </label>

        <p>Ваш рівень:</p>
        <label>
          <input
            type="radio"
            value="junior"
            name="experience"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            value="middle"
            name="experience"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            value="senior"
            name="experience"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="senior"
            name="licence"
            onChange={this.handleLicenceChange}
            checked={this.state.licence}
          />
          Згідний з умовами
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
