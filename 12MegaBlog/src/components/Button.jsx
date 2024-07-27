import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    className ='',
    ...props

    })
{
    // don't be confused with this new className, it is same as the former one
    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
    )
}

export default Button;