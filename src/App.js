import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    value: ''  
  };

  onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title.value);
        this.setState({
          value: title.value
        });
  }

  render() {
    return (
        <div className="App">
          <QRCode value={this.state.value} />
          <form className="form-horizontal">
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
          </form>
          <button type="button" onClick={this.onSubmit} className="btn">Save</button>
        </div>
    );
  }
}

export default App;
