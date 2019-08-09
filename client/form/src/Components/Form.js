import React, {useEffect} from "react";
import {Form, Field, withFormik} from "formik";
import axios from "axios";
import * as Yup from "yup";

import RecipesCard from "./recipes.js";



const FormOriginal = ({touched, errors, addRecipe, recipes, status}) => {

        useEffect(() => {
            axios
            .get("http://localhost:5000/api/restricted/data")
            .then(response => addRecipe(response.data))
            .catch(error => console.log(error))
        }, [])
console.log(recipes)
    return (
        <div>
            <Form>
                <h2>User Signup</h2>
                <Field type = "text" name = "username" placeholder = "Username" />
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type = "password" name = "password" placeholder = "Password" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type ="submit">Submit</button>
                {recipes.map(recipe => {
                  return  <RecipesCard key = {Date.now()} recipe = {recipe} />
                })}
            </Form>
            {}
        </div>
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

    handleSubmit(values, {resetForm, setErrors, setStatus}) {
        axios
            .post("http://localhost:5000/api/register", values)
            .then(response => setStatus(response.data))
            .catch(error => console.log(error))
    }
})(FormOriginal);

export default FormikForm;