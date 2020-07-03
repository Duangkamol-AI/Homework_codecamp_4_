import React, { Component } from 'react';
import './App.css';

  class App extends Component{
    constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key,value){
    this.setState({
      [key]:value
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
      const list=[...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
  }
  deleteItem(id){
    const list =[...this.state.list];
    const updateList =list.filter(item =>item.id !== id)
    this.setState({list:updateList});
  }
  render(){
    return (
      <div className="App">
      
        <h2 style={{color:"Pink"}}>TO_DO_List_App</h2>
        <br/>
        <input type="text"
        placeholder="Add a card..."
        value={this.state.newItem}
        onChange={e=>this.updateInput("newItem",e.target.value)}></input>
        <button className="btn btn-floating" onClick={() => this.addItem()}>Add</button>
        <br/>
        <ol className="App">
          {this.state.list.map(item=>{
            return(
              <li className="btn" key={item.id}>
                {item.value}
                <button className="btn" onClick={() => this.deleteItem(item.id)}>
                    <i className="btn">x</i>
                </button>
              </li>
            )
          })}
        </ol>
      
    </div>
  );
}
}
export default App;
