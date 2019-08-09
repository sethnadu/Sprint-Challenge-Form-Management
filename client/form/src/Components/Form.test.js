import React, {useState} from "react";

 const FormTest = (props) => {
     const [test, setTest] = useState("test")


    function handleSubmit() {
       return setTest("TestTest")
    }
    
    return (
        <>
        <button data-testid="test" onClick ={handleSubmit}>TEST BUTTON</button>
        <p data-testid="testP">{test}</p>
        {props.recipeData.map(recipe => (
            <div key = {recipe.id} data-testid="name">{recipe.name}</div>
        ))}
       
        </>

    )
}

export default FormTest;