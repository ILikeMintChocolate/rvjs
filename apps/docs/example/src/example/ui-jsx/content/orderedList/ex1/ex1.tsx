import { ListItem, OrderedList } from '@rvjs/ui'

const OrderedListExample = () => {
  return (
    <OrderedList>
      <ListItem>배포 파이프라인 설정</ListItem>
      <ListItem>타입스크립트 빌드 에러 해결</ListItem>
      <ListItem>테스트 코드 작성</ListItem>
      <ListItem>UI 컴포넌트 최적화</ListItem>
    </OrderedList>
  )
}

export default OrderedListExample
