export const loader = ({ src }) => {
  const [first, second] = src.split(":");
  const urlChunks = second.split("/");
  console.log(
    urlChunks.slice(2, 5).join("/") +
      "/c_crop,h_300,w_200/" +
      urlChunks.slice(5).join("/")
  );
  return `https://${urlChunks
    .slice(2, 6)
    .join("/")}/c_fill,h_300,w_200/${urlChunks.slice(6).join("/")}`;
};

export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
