import  React  from 'react';
import './App.css';
import Form from './form';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <Form />
      </div>
    );
  }
}

export default App;
