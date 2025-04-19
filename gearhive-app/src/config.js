// src/config.js

const LOCAL = "http://localhost:3001";
const PROD = "https://gearhiveserver.onrender.com";

export const API_BASE = window.location.hostname.includes("localhost")
  ? LOCAL
  : PROD;
export const IMAGE_BASE = API_BASE; // Images are served from the same origin
