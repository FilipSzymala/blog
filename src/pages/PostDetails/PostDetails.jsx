import { EditOutlined, LikeOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Skeleton, Space } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import postService from 'services/post'

const { Meta } = Card

const PostDetails = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    postService
      .fetchPost(postId)
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.message === 'Not found') {
          navigate('/not-found')
        }
      })
  }, [])

  return (
    <Row justify="center">
      <Col md={20}>
        <Card
          actions={[
            <Space key="LikeButton">
              <Button
                type="link"
                key="likesCount"
                icon={<LikeOutlined />}
                disabled={loading}
              />
              {post?.likesCount}
            </Space>,
            <Button
              type="link"
              key="edit"
              icon={<EditOutlined />}
              disabled={loading}
            />,
          ]}
        >
          <Skeleton loading={loading} active title paragraph={{ rows: 10 }}>
            <Meta title={post?.title} description={post?.body} />
          </Skeleton>
        </Card>
      </Col>
    </Row>
  )
}

export default PostDetails
