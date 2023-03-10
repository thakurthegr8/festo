export const loader = ({ src }) => {
  const [first, second] = src.split(":");
  return `https:${second}`;
};
