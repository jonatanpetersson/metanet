import React from 'react'
import './Blog.scss'
import { BlogItem } from './BlogItem/BlogItem'

const Blog = () => {
    return (
        <main className="page__blog">
            <h1 className="page__blog-title">Metanet news</h1>
            <ul className="page__blog-list">
                <BlogItem />
            </ul>
        </main>
    )
}

export default Blog
