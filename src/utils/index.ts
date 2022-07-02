export function isValidName(names: string[]) {
  for (const name of names) if (name.length > 5) return false;
  return true;
}
