import React from 'react'

import { useOutletContext, useParams } from 'react-router-dom'


const Blog = () => {
    // getting url param using useParams hook
    const { id } = useParams()
    // getting outlet context
    const obj = useOutletContext()
    return (
        <>
            <p>{obj.msg}</p>
            <h2>Blog {id}</h2>
        </>
    )
}

export default Blog