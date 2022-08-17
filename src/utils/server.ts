const dev = process.env.NODE_ENV !== "production";

export const serverEndPoint = dev
  ? "http://localhost:3000"
  : "https://fs-prismic-dashboard.vercel.app";
