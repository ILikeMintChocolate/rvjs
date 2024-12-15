export type HTMLDivType = Partial<
  Omit<HTMLDivElement, 'align' | 'classes' | 'children' | 'style' | 'ref'>
>

export type HTMLElementProperties<T> = Partial<T>
