import React,{useState, useEffect} from 'react'
import api from '../../services/api.js'
import {Post} from '../../components/Post'

export const Main = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    api.get('/posts')
    .then((response) => {
      setPost(response.data)
    })
  },[post])

  return (
    <>
      <section className="container">
      <h2 className='mt-3'>Articles</h2>
        <div className="mt-5 container-posts">
          {
            post.map(post => {
              return (
                <div key={post.id}>
                  <Post
                    category={post.category}
                    title={post.title}
                    description={post.description}
                    author={post.author}
                    date={post.date}
                  >
                    {post.resume}
                  </Post>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
