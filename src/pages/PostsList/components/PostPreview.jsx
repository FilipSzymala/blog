import { LikeOutlined } from '@ant-design/icons'
import { Button, List, Typography } from 'antd'
import { IconText } from 'components'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const { Paragraph } = Typography

const ExtraContentWrapper = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
`

const PostPreview = ({ post }) => {
  const navigate = useNavigate()

  const handleNavigate = (postId) => navigate(`/posts/${postId}`)

  return (
    <List.Item
      key={post.title}
      actions={[
        <IconText
          icon={LikeOutlined}
          text={post.likesCount}
          key="list-vertical-like-o"
        />,
      ]}
      extra={
        <ExtraContentWrapper>
          <Button type="primary" onClick={() => handleNavigate(post.id)}>
            Read more
          </Button>
        </ExtraContentWrapper>
      }
    >
      <List.Item.Meta title={post.title} />
      <Paragraph ellipsis={{ rows: 2, expandable: false }}>
        {post.body}
      </Paragraph>
    </List.Item>
  )
}

export default PostPreview
