// @ts-nocheck

import { CopyIcon } from '@content/icon/Icons.tsx'
import Button from '@form/button/Button.tsx'
import Tooltip from '@overlay/tooltip/Tooltip.tsx'
import {
  singleCodeSnippet_codeWrapper_style,
  singleCodeSnippet_copyIcon_style,
  singleCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/single/SingleCodeSnippet.css.ts'
import {
  useSingleCodeSnippetEvent,
  useSingleCodeSnippetHighlight,
  useSingleCodeSnippetProps,
} from '@typography/codeSnippet/single/SingleCodeSnippet.hook.ts'
import { SingleCodeSnippetProps } from '@typography/codeSnippet/single/SingleCodeSnippet.props.ts'
import { text_recipe } from '@typography/text/Text.css.ts'

const SingleCodeSnippet = (_props: SingleCodeSnippetProps) => {
  const props = useSingleCodeSnippetProps(_props)
  const onClickHandler = useSingleCodeSnippetEvent(props)
  const highlightedCodeHTML = useSingleCodeSnippetHighlight(props)

  return (
    <div
      className={singleCodeSnippet_wrapper_style}
      style={{ width: props.width }}
      aria-label={props.ariaLabel}
    >
      <div className={singleCodeSnippet_codeWrapper_style} tabIndex="-1">
        <span
          className={text_recipe({ kind: 'code-01' })}
          innerHTML={highlightedCodeHTML}
        />
      </div>
      {!props.hideCopyButton && (
        <Tooltip
          description={props.copyButtonDescription}
          showOnHoverOrClick="click"
        >
          <Button
            size="md"
            kind="ghost"
            hasIconOnly={true}
            renderIcon={
              <CopyIcon className={singleCodeSnippet_copyIcon_style} />
            }
            onClick={onClickHandler}
          />
        </Tooltip>
      )}
    </div>
  )
}

export default SingleCodeSnippet
