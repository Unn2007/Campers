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
