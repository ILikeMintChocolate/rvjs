import { prop } from '@rvjs/core'
import { ListItem, UnorderedList } from '@rvjs/ui'

const ListItemExample = () => {
  return UnorderedList({
    children: [
      ListItem({ text: prop(() => '배포 파이프라인 설정') }),
      ListItem({ text: prop(() => '타입스크립트 빌드 에러 해결') }),
      ListItem({ text: prop(() => '테스트 코드 작성') }),
      ListItem({ text: prop(() => 'UI 컴포넌트 최적화') }),
    ],
  })
}

export default ListItemExample
