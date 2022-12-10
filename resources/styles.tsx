import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

body {
  background: #fff;
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1em;
}
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  text-align: center;
  margin: 60px 0;
}
header a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  display: inline-block;
}
header h1,
header h2 {
  margin: 0;
}
header span {
  display: block;
  line-height: 1em;
}
header span:first-child {
  font-size: 1em;
  font-weight: 400;
}
header span:last-child {
  font-size: 1.5em;
  font-weight: 800;
}
header h2 {
  font-size: 1.2em;
  font-weight: 400;
}
footer {
  background: #111;
  color: #bbb;
  padding: 40px;
  text-align: center;
  margin-top: auto;
}
.page-content {
  max-width: 1200px;
  margin: 20px auto 80px;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}
`;
