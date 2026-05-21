import useWindowSize from './useWindowSize'

export default function useBreakpoint() {
  const { width } = useWindowSize()

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isCompactNav: width < 480,
  }
}
