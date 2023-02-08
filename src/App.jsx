import { Card } from 'antd'
import { PostsList } from 'pages'

const App = () => {
  return (
    <Card
      className='container'
      title="Users' posts"
      bordered={false}
      style={{
        width: 900,
      }}
    >
      <PostsList />
    </Card>
  )
}

export default App
