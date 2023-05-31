import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

let style = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
};

export default function () {
  return new ImageResponse(<div style={style}>Hello from Andre</div>, {
    width: 1200,
    height: 600,
  });
}
