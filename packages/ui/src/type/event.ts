export interface EventHandlers {
  onBlur: (event: FocusEvent) => void
  onClick: (event: MouseEvent) => void
  onFocus: (event: FocusEvent) => void
  onMouseEnter: (event: MouseEvent) => void
  onMouseLeave: (event: MouseEvent) => void
  onChange: (event: Event) => void
}
