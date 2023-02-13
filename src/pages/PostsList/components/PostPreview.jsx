import { LikeOutlined } from '@ant-design/icons';
import { List, Space, Typography  } from 'antd';
const { Paragraph } = Typography;
import React from 'react';
  
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
)

// const shortenPostBody = (postBody) => {
//     return postBody.split(".", 2).join(".") + "."
// }

const PostPreview = ( { data } ) => {
    return (
        <List.Item
            key={data.id}
            actions={[
            <IconText icon={LikeOutlined} text={data.likesCount} key="list-vertical-like-o" />,
            ]}
        >
            <List.Item.Meta
            title={<p>{data.title}</p>}
            />
            <Paragraph ellipsis={{
                rows: 2
            }}>{data.body}</Paragraph>
        </List.Item>
    )
    
}

export default PostPreview