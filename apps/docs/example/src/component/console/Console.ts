import {
  console_header_style,
  console_headerButton_style,
  console_headerIcon_style,
  console_headerText_style,
  console_message_style,
  console_messageWrapper_style,
  console_wrapper_style,
} from '@component/console/Console.css.ts'
import trashCanSvg from '@icon/trash-can.svg?element'
import {
  button,
  component,
  div,
  For,
  p,
  section,
  svg,
  useEffect,
  useGlobalState,
  useRef,
} from '@rvjs/core'
import { coolScrollBar_style } from '@theme/util.css.ts'

const Console = component(() => {
  const [logs, setLogs] = useGlobalState<string[]>('LOGS', [])
  const messageWrapperRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight
    }
  }, [logs])

  return section({
    classes: [console_wrapper_style],
    children: [
      div({
        classes: [console_header_style],
        children: [
          button({
            classes: [console_headerButton_style],
            onclick: () => {
              setLogs([])
            },
            children: [
              svg(trashCanSvg(), {
                classes: [console_headerIcon_style],
              }),
            ],
          }),
          p({
            classes: [console_headerText_style],
            textContent: 'Console',
          }),
        ],
      }),
      div({
        ref: messageWrapperRef,
        classes: [console_messageWrapper_style, coolScrollBar_style],
        children: [
          For(logs, (log: string) => {
            return p({
              classes: [console_message_style],
              textContent: `${log}`,
            })
          }),
        ],
      }),
    ],
  })
})

export default Console
