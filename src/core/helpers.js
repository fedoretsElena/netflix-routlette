export function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

export function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
