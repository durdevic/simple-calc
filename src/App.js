
import React, { Component } from "react";
import Screen from './components/Screen';
import Button from './components/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    }
  }

  // method to handle all click events from buttons
  handleClick =(event) =>{
    const value = event.target.value; // get the value from the target element (button)
    switch (value) {
      // if it's an equal sign, use the eval module to evaluate the question
      case '=': { 
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state.
        this.setState({ answer });
        break;
      }
      case 'AC': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }
      case '+':
      case '-': {
        this.setState({ question: this.state.question += ` ${value} ` });
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        this.setState({ question: this.state.question += value})
        break; 
      }
    }
  }

  render() {
    return (
      <div>
        <div className="frame">
          <div className="calculator-title">
            Calc by Uros
          </div>
          <Screen question={this.state.question} answer={this.state.answer}/>
          <div className="btn-row ">
            <Button className='btn-primary' label={'7'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'8'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'9'} handleClick={this.handleClick} type='input' />
            <Button className='btn-info' label={'+'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="btn-row ">
            <Button className='btn-primary' label={'4'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'5'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'6'} handleClick={this.handleClick} type='input' />
            <Button className='btn-info' label={'-'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="btn-row ">
            <Button className='btn-primary' label={'1'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'2'} handleClick={this.handleClick} type='input' />
            <Button className='btn-primary' label={'3'} handleClick={this.handleClick} type='input' />
            <Button style={{backgroundColor: 'transparent'}} label={''} type='action'/>
          </div>
          <div className="btn-row ">
          <Button className='btn-warning' label={'AC'} handleClick={this.handleClick} type='action' />
          <Button className='btn-primary' label={'0'} handleClick={this.handleClick} type='input' />
          <Button className='btn-primary' label={'.'} handleClick={this.handleClick} type='input' />
            <Button className='btn-success' label={'='} handleClick={this.handleClick} type='action' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
