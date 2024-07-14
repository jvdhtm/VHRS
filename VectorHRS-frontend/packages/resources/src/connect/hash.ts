
const table = new WeakMap();

// counter of the key
let counter = 0;

// hashes an array of objects and returns a string
export default function hash(args: any[]): string {
  if (!args.length) return "";
  let key = "arg";
  for (let i = 0; i < args.length; ++i) {
    let _hash;
    if (
      args[i] === null ||
      (typeof args[i] !== "object" && typeof args[i] !== "function")
    ) {
      if (typeof args[i] === "string") {
        _hash = '"' + args[i] + '"';
      } else {
        _hash = String(args[i]);
      }
    } else {
      if (!table.has(args[i])) {
        _hash = counter;
        table.set(args[i], counter++);
      } else {
        _hash = table.get(args[i]);
      }
    }
    key += "@" + _hash;
  }
  return key;
}

export const hid = (obj: any) => {
  let hc = 0;
  const chars = JSON.stringify(obj);
  const len = chars.length;
  for (let i = 0; i < len; i++) {
    // Bump 7 to larger prime number to increase uniqueness
    hc += chars.charCodeAt(i) * 19;
  }
  return hc;
};