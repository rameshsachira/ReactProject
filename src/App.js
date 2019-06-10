/*import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  return (
    <div className="App">
        
      <br/>
      <input type="label"id="Number 1"onChange={this.handleChange} value={this.state.product.Number1}/>
      <input type="text"/>
      <br/>
      <br/>
      <input type="label2"id="Number 2"onChange={this.handleChange} value={this.state.product.Number2}/>
      <input type="text"/>
      <br/>
      <br/>
      <button onClick="sum()">ADD</button>

      function sum()
      {
        let feild1 = document.getElementById("Number 1").value;
        let feild2= document.getElementById("Number 2").value;

        let result=parseFloat(feild1)+parseFloat(feild2);

        if (!isNaN(result)) {
          document.getElementById("answer").innerHTML="The Answer is"+result; 
        }
      }

      
      
    </div>
  );
  }
}

export default App; 

/*import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Enter Value 1',
         data1: 'Enter Value 2'
      }
      this.updateState = this.updateState.bind(this);
     // this.updateState1 = this.updateState.bind(this);
   };
    
   updateState(e) {
      this.setState({data: e.target.value});
      this.setState({data1: e.target.value});
   }
   updateState(){
     this.setState({});
   }  
    render() {
        return (
          <div>
              <input type = "text" placeholder = {this.state.data}  value={this.state.data}
                onChange = {this.updateState} />
              <h4>{this.state.data}</h4>
          
            
            <input type = "text" placeholder = {this.state.data1}  value1={this.state.data1}
              onChange = {this.updateState} />
            <h4>{this.state.data1}</h4>
            <button onClick="this.updateStatus">ADD</button>
            </div>

          
            );

            
    }
  }

  // result(){
   // var sum = value +  value1;
  //  }

export default App; */


import React from 'react';
import ReactDOM from 'react-dom';

class Grade extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: 0,
      num2: 0
    };
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change (evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log( evt.target.value);
    this.setState({ num2: Number(evt.target.value) });
  }
  addAction =(event)=> {
    let x = this.state.num1 + this.state.num2
    this.setState({result: x })
  }
render() {
 return (
    <form>
        <label>
          Add Numbers
          <input type="number" onChange={this.handlenum1Change} />
          <input type=" number"   onChange={this.handlenum2Change}/>
          <input type="button" onClick={this.addAction} value="Add"/>
          <input type='text' value={this.state.result} readOnly/>
        </label>
      </form>
    );
  }
}




export default Grade; 
