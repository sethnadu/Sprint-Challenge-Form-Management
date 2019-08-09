import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getAllByTestId } from "@testing-library/react";
import Form from './Components/Form.js';
import FormTest from "./Components/Form.test.js"
// import Recipes from "./Components/recipes.js";

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
})
describe("<Form />", () => {

it('passes props correctly', () => {
  const form = render(<Form h2= "User Signup"/>);
  form.getAllByText(/user signup/i);
});

it("testing submit button", () => {
  const form = render(<Form />);
  const submitButton = form.getAllByTestId("test");
  const testP = form.getByTestId("testP")

  form.fireEvent.click(submitButton);
  expect(testP.textContent).toBe("Test");
  
})

})

describe("<FormTest />", () => {
  it("renders the recipes", () => {
    const recipeData = [
      {id: 1, name: "burger"},
      {id: 2, name: "eggs"},
      {id: 3, name: "hotdog"}
    ];
  
    const formRecipe = render(<FormTest recipeData={recipeData} />);
    const recipe = formRecipe.getAllByTestId("name");
  
    expect(recipe).toHaveLength(recipeData.length)
  })
})

// To get code running in Form.js uncomment out the useEffect, and the recipes.map in the return statement below <Form>{code}</Form>

