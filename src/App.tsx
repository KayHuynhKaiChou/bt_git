import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostComponent from './PostComponent'
import { Post } from './Model/Post'
import { User } from './Model/User'

function App() {

  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<Array<User>>([])

  const fetchAPI:() => void = async () => {
    const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts',{
      headers:{
        'content-type' : 'application/json',
        'accept' : 'application/json'
      }
    })
    const resUsers = await fetch('https://jsonplaceholder.typicode.com/users',{
      headers:{
        'content-type' : 'application/json',
        'accept' : 'application/json'
      }
    })
    const result : [Post[], User[]] = await Promise.all([resPosts.json() , resUsers.json()])
    const [posts , users] = result
    posts.map(post => {
      const nameUser : string | undefined = users.find(user => user.id === post.userId)?.name 
      return {
        id: post.id,
        nameUser,
        title: post.title
      }
    })
    setPosts(posts)
    setUsers(users)
  }

  useEffect(() => {
    fetchAPI();
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <PostComponent posts = {posts}/>
    </>
  )
}

export default App
