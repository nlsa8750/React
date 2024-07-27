import React from 'react'
// we are using appwrite service because the data is not available inside the state which can be fetched using the redux (prop drilling removal technique)
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

//  don't be confused with the dollar sign, it's just a syntax
function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`} >
            <div className='w-full bg-indigo-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview({featuredImage})} alt={title}
                    className="rounded-xl" />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard;