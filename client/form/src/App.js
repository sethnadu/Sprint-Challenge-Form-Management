import React from 'react';
import FormikForm from "./Components/Form.js"
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  addRecipe = recipe => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })
  }

    render () {
        return (
          <div className="App">
          <FormikForm users = {this.state.users} recipes = {this.state.recipes}  addUser = {this.addUser} addRecipe = {this.addRecipe}/>
          </div>
       );
    }
  }
  

export default App;
