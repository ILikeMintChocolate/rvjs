import { IndexButtonProps } from '@component/tableOfContents/IndexButton/IndexButton.tsx'

export const useIndexButtonScrollTo = (props: IndexButtonProps) => {
  const onClickHandler = () => {
    const scrollTopPosition =
      props.heading.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: scrollTopPosition - 48 - 200,
      behavior: 'smooth',
    })
    props.setActiveIndex(props.currentIndex)
  }

  return onClickHandler
}
