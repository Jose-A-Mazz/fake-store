export default function useUpperCase(str) {
  if (!str) return undefined;
  const upperCasedString =
    str.slice(0, 1).toUpperCase() + str.slice(1, undefined);

  return upperCasedString;
}
