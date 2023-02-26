import { Spin } from 'antd'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => (
  <LoadingWrapper>
    <Spin />
  </LoadingWrapper>
)

export default Loading
