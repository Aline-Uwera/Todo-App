
const extractRoute = (fullRoute: string): string => {
   if (fullRoute === '/todos') return '/todos'
  const splitRoutes: string[] = fullRoute.split('/')
  const extractedRoutes: string[] = splitRoutes.slice(0, 3)
  const joinedRoute: string = extractedRoutes.join('/')
  return joinedRoute
}

export default extractRoute

