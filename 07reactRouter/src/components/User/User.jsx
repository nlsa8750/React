import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const {userid} = useParams();
    return (
    <div className='bg-gray-500 text-white text-center text-4xl p-4 max-w-lg mx-auto'>User : {userid}</div>
    )
}
