import React,{Component} from 'react';
import './App.css';
import InputValues from './calc/InputValues'

class App extends Component {
  render(){
    return(
      <div className="App">
        <InputValues></InputValues>
      </div>
    )
  }
}

export default App;
