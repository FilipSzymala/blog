import { Spin } from "antd"
import { useEffect, useState } from "react"
import { PostPreview } from "./components"
const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log({ posts }, [posts]);
  })
  
  useEffect(()=> {
    setLoading(true)
    fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data)
      }
    ).finally(() => setLoading(false))

  },[])

  return (
    <div>
      {loading ? ( <Spin /> ) :
      (
        <div>
        {
          posts.map((post) => (
            // <div key={ post.id }>{ post.title }</div>
            <PostPreview key={ post.id } post={ post } />
          )
        )}
        </div>
      )}
    </div>
  )
}

export default PostsList
