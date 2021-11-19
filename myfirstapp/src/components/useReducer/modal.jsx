import React, { useEffect } from 'react'



export default function Modal(props) {
    useEffect(()=>{
        setTimeout(()=>{
            props.closeModalTime();
        },2000)
    })

    return <div>{props.modalContent}</div>
};
