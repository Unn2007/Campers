export function removeFalsyValues(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Boolean(value))
  );
}

export function renameProperties(obj, renames) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [renames[key] || key, value])
  );
}
export function removeStringFromArray(array, stringToRemove) {
  const index = array.indexOf(stringToRemove);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

export function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getFirstLetter(string) {
  if (typeof string === "string" && string.length > 0) {
    return string[0];
  }
  return null;
}
