import React,{useState} from 'react'
import api from '../../services/api.js'
import {Post} from '../../components/Post'

export const Main = () => {

  const [post, setPost] = useState([])

  async function getPosts() {
    try {
      const response = await api.get('/posts')
      setPost(response.data)
    } catch(error) {
      console.log('Deu ruim mano ' + error)
    }
  }
  getPosts()

  return (
    <>
      <h1>Main</h1>
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
    </>
  )
}
