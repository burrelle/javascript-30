export default function strip(name) {
  return name.replace(/^(a |the |an )/i, '').trim();
}
