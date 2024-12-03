export const useNavigate = (newPath: string) => {
  if (newPath.startsWith('#')) {
    window.location.hash = newPath
  } else {
    window.location.hash = `#${newPath}`
  }
}
