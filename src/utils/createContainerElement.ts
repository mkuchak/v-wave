import { IVWaveDirectiveOptions } from '../options'

/**
 * Creates a container element for the wave.
 * @param el The element that the wave will appear on
 * @param styles The Computed Styles of `el`
 */
export const createContainer = ({
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius
}: CSSStyleDeclaration) => {
  const waveContainer = document.createElement('div')

  borderTopLeftRadius = parseInt(borderTopLeftRadius, 10) - 2 + 'px'
  borderTopRightRadius = parseInt(borderTopRightRadius, 10) - 2 + 'px'
  borderBottomLeftRadius = parseInt(borderBottomLeftRadius, 10) - 2 + 'px'
  borderBottomRightRadius = parseInt(borderBottomRightRadius, 10) - 2 + 'px'

  waveContainer.style.top = '0'
  waveContainer.style.left = '0'
  waveContainer.style.width = '100%'
  waveContainer.style.height = '100%'
  waveContainer.style.position = 'absolute'
  waveContainer.style.borderRadius = `${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomRightRadius} ${borderBottomLeftRadius}`
  waveContainer.style.overflow = 'hidden'
  waveContainer.style.pointerEvents = 'none'
  return waveContainer
}
