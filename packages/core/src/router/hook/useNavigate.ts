export const useNavigate = () => (newPath: string, isExternal?: boolean) => {
  if (isExternal) {
    const externalPath = !/^https?:\/\//.test(newPath)
      ? `https://${newPath}`
      : newPath
    window.open(externalPath, '_blank')
  } else {
    if (newPath.startsWith('#')) {
      window.location.hash = newPath
    } else {
      window.location.hash = `#${newPath}`
    }
  }
}
