import React from "react";

 const FormTest = (props) => {
    
    return (
        <>
        {props.recipeData.map(recipe => (
            <div key = {recipe.id} data-testid="name">{recipe.name}</div>
        ))}
        </>

    )
}

export default FormTest;