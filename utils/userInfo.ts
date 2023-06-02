export const getUserInfo = (session: string | null): any => {
  try {
    const user = session ? JSON.parse(session)?.user : null
    return user
  } catch (error) {
    return null
  }
}
