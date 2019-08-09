import React, {useEffect} from "react";
import {Form, Field, withFormik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import Styled from "styled-components";

import RecipesCard from "./recipes.js";

const FormContainer = Styled.div `
    display: flex;
    width: 400px;
    height: 400px;
    margin: 30px auto 30px auto;
    border: 2px solid black;
    justify-content: center;
    background-color: lightgray;

`
const FormInfo = Styled.div `
    display: flex;
    flex-direction: column;
    margin: 20px;
    height: 300px;
    justify-content: space-evenly;

`

const EntireContainer = Styled.div `
    display: flex;
    flex-flow: column;
    margin: auto;


`

const RecipeContainer = Styled.div `

    display: flex;
    flex-flow: row wrap;
    margin: auto;
    justify-content: space-evenly;

`



const FormOriginal = ({touched, errors, addRecipe, recipes}) => {
        // uncommit to get working
        useEffect(() => {
            axios
            .get("http://localhost:5000/api/restricted/data")
            .then(response => addRecipe(response.data))
            .catch(error => console.log(error))
        }, [addRecipe])

    

    return (
        <EntireContainer>
        <FormContainer>
            <Form>
             <FormInfo>
                <h2>User Signup</h2>
                <Field type = "text" name = "username" placeholder = "Username" />
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type = "password" name = "password" placeholder = "Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type ="submit">Submit</button>
                {/* Uncomment to get code working */}
               
            </FormInfo>
            </Form>
             
        </FormContainer>
        <RecipeContainer>
        {recipes.map(recipe => {
                  return  <RecipesCard data-testid="recipe" key = {Date.now()} recipe = {recipe} />
                })};
        </RecipeContainer>        
        </EntireContainer>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
    }),

    handleSubmit(values, {resetForm}) {
        axios
            .post("http://localhost:5000/api/register", values)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
          
        resetForm();    
        
    }   
})(FormOriginal);

export default FormikForm;