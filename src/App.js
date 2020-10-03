import React, {Component} from 'react';
import Form from './components/form/Form';
import Output from './components/output/Output';

import './css/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      form: true,
      output: false
    }

    this.handleOutput = this.handleOutput.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleOutput() {
    this.setState({
      form: false,
      output: true
    })
  }

  handleForm() {
    this.setState({
      form: true,
      output: false
    })
  }

render() {
  return (
    <main>
      {this.state.form && <Form moveToOutput = {this.handleOutput}/>}
      {this.state.output && <Output moveToForm = {this.handleForm} />}

    </main>
  )
}
}

export default App;
