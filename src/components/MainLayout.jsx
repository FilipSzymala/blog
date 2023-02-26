import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const PaddedContent = styled(Content)`
  padding: 16px 24px;
  overflow-y: auto;
  background-color: #dfdfdf;
`

const MainLayout = () => (
  <Layout style={{ height: '100vh' }}>
    <Header>header</Header>
    <Layout>
      <PaddedContent>
        <Outlet />
      </PaddedContent>
    </Layout>
  </Layout>
)

export default MainLayout
