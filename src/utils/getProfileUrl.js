export const getProfileUrl = publicUrl =>
  publicUrl === "/" ? "/profile.json" : `${publicUrl}/profile.json`;
