const dev = process.env.NODE_ENV !== "production";

export const serverEndPoint = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_VERCEL_SERVER_ENDPOINT;
