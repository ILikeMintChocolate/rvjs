import { Tooltip } from '@rvjs/ui'

const TooltipExample = () => {
  return (
    <div>
      <Tooltip description="Hello!">
        <h4 style={{ color: '#0c8ce9', cursor: 'help' }}>Hover Me</h4>
      </Tooltip>
    </div>
  )
}

export default TooltipExample
