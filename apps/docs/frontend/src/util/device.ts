import isMobile from 'ismobilejs'

let deviceType = null

export const getDeviceType = (): 'desktop' | 'mobile' => {
  if (deviceType) {
    return deviceType
  }
  // @ts-ignore
  deviceType = isMobile().any ? 'mobile' : 'desktop'
  return deviceType
}
