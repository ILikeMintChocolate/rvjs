// @ts-nocheck

import { ChevronDownIcon, CopyIcon } from '@content/icon/Icons.tsx'
import Button from '@form/button/Button.tsx'
import Tooltip from '@overlay/tooltip/Tooltip.tsx'
import {
  multiCodeSnippet_buttonWrapper_style,
  multiCodeSnippet_codeWrapper_style,
  multiCodeSnippet_copyIcon_style,
  multiCodeSnippet_pre_style,
  multiCodeSnippet_showMoreIcon_recipe,
  multiCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/multi/MultiCodeSnippet.css.ts'
import {
  useMultiCodeSnippetClipboard,
  useMultiCodeSnippetHighlight,
  useMultiCodeSnippetProps,
  useMultiCodeSnippetToggle,
} from '@typography/codeSnippet/multi/MultiCodeSnippet.hook.ts'
import { MultiCodeSnippetProps } from '@typography/codeSnippet/multi/MultiCodeSnippet.props.ts'
import { text_recipe } from '@typography/text/Text.css.ts'

const MultiCodeSnippet = (_props: MultiCodeSnippetProps) => {
  const props = useMultiCodeSnippetProps(_props)
  const { height, showMore, onClickHandler } = useMultiCodeSnippetToggle(props)
  const onCopyButtonClickHandler = useMultiCodeSnippetClipboard(props)
  const highlightedCodeHTML = useMultiCodeSnippetHighlight(props)

  return (
    <div
      className={multiCodeSnippet_wrapper_style}
      style={{ width: props.width }}
      aria-label={props.ariaLabel}
    >
      <div className={multiCodeSnippet_codeWrapper_style} tabIndex="0">
        {props.wrapText ? (
          <pre
            className={multiCodeSnippet_pre_style}
            style={{ height: height() }}
          >
            <code
              className={text_recipe({ kind: 'code-01' })}
              innerHTML={highlightedCodeHTML}
            />
          </pre>
        ) : (
          <code
            className={text_recipe({ kind: 'code-01' })}
            innerHTML={highlightedCodeHTML}
          />
        )}
      </div>
      <div className={multiCodeSnippet_buttonWrapper_style}>
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
                <CopyIcon className={multiCodeSnippet_copyIcon_style} />
              }
              onClick={onCopyButtonClickHandler}
            />
          </Tooltip>
        )}
        <Button
          size="md"
          kind="ghost"
          hasIconOnly={true}
          renderIcon={
            <ChevronDownIcon
              className={multiCodeSnippet_showMoreIcon_recipe({
                showMore: showMore(),
              })}
            />
          }
          onClick={onClickHandler}
        />
      </div>
    </div>
  )
}

export default MultiCodeSnippet
