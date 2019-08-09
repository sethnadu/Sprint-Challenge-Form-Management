import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, getByText } from "@testing-library/react";
import Form from './Components/Form.js';
import Recipes from "./Components/recipes.js";

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
})
describe("<Form />", () => {

it("renders the recipes", () => {
  const recipeData = [
    {id: 1, name: "burger"},
    {id: 2, name: "eggs"},
    {id: 3, name: "hotdog"}
  ];

  const { container } = render(<Form recipe={recipeData} />);
  const recipe = container.getAllByTestId("name");

  expect(recipe).toHaveLength(recipeData.length)
})


it('passes props correctly', () => {
  const { container } = render(<Form h2= "User Signup"/>);
  container.getByText(/user signup/i);
});



})



