import React, { Children } from 'react';

const Button = ({className, children})=>{
   


    return (
        <button className= {`button ${className}`} > {children}</button>
    )


}

export default Button