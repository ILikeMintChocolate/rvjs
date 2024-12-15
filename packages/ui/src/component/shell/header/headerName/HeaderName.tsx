import { headerName_style } from '@shell/header/headerName/HeaderName.css.ts'
import { useHeaderNameNavigation } from '@shell/header/headerName/HeaderName.hook.ts'
import { HeaderNameProps } from '@shell/header/headerName/HeaderName.props.ts'
import { isDefined } from '@type/guard.ts'
import Text from '@typography/text/Text.tsx'

const HeaderName = (props: HeaderNameProps) => {
  const onClickHandler = useHeaderNameNavigation(props)

  return (
    <a className={headerName_style} href={props.href} onClick={onClickHandler}>
      {isDefined(props.prefix) && (
        <Text kind="body-compact-01" color="textPrimary">
          {props.prefix}
        </Text>
      )}
      <Text kind="heading-compact-01" color="textPrimary">
        {props.title}
      </Text>
    </a>
  )
}

export default HeaderName
