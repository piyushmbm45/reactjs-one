import React from 'react'

const ErrorExample = ()=>{

    let title = "Random Title"
    function handleClick(){
        title= "hello World"
        console.log(title);
    }

    return     <>
    <h1>{title}</h1>
    <button onClick={handleClick}>Change Title</button>
    </>
}


export default ErrorExample;


// from the above example it is clear that as rendering is not happening thats why title didn't change after click
// thats why we use hooks - useState 