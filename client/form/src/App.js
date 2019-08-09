import React from 'react';
import FormikForm from "./Components/Form.js"
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [
      {id: 1, name: "burger"},
      {id: 2, name: "eggs"},
      {id: 3, name: "hotdog"}
    ]
      
    }
  }
 
  addRecipe = recipe => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })
  }

    //    const recipesArray = [ {id: 3, name: "burger"},
    // {id: 4, name: "eggs"},
    // {id: 5, name: "hotdog"}]
    // this.setState({
    //   recipes: recipesArray
    // })
    
      

    render () {
 
        return (
          <div className="App">
          <FormikForm recipes = {this.state.recipes}  addUser = {this.addUser} addRecipe = {this.addRecipe}/>
          </div>
       );
    }
  }
  

export default App;
