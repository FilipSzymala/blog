import { Button, Col, Result, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleBackHome = () => navigate('/posts')

  return (
    <Row
      justify="center"
      align="center"
      style={{ height: '100vh', margin: 'auto' }}
    >
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={handleBackHome}>
              Back Home
            </Button>
          }
        />
      </Col>
    </Row>
  )
}

export default NotFound
