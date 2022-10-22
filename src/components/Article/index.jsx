import React from 'react'
import {Post} from '../Post'

export const Article = () => {
  return (
    <section className="container">
      <h1>Articles</h1>
      <div className='mt-5 container-posts'>
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  )
}
