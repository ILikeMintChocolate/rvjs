export const colorToHex = (color: string) => {
  const rgbaRegex = /rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/
  const rgbaValues = color.match(rgbaRegex)
  const r = parseInt(rgbaValues[1])
  const g = parseInt(rgbaValues[2])
  const b = parseInt(rgbaValues[3])
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')
  if (rgbaValues[4]) {
    const a = parseFloat(rgbaValues[4])
    const hexA = Math.round(a * 255)
      .toString(16)
      .padStart(2, '0')
    return `#${hexR}${hexG}${hexB}${hexA}`
  } else {
    return `#${hexR}${hexG}${hexB}`
  }
}
