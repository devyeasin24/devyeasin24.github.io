import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Restore a route saved by GitHub Pages 404.html before React renders.
try {
  const savedRoute = sessionStorage.getItem("dev-yeasin-github-pages-route");
  if (savedRoute) {
    sessionStorage.removeItem("dev-yeasin-github-pages-route");
    const requestedUrl = new URL(savedRoute);
    if (requestedUrl.origin === window.location.origin) {
      window.history.replaceState(null, "", `${requestedUrl.pathname}${requestedUrl.search}${requestedUrl.hash}`);
    }
  }
} catch {
  // The homepage remains usable if browser storage is unavailable.
}

createRoot(document.getElementById("root")!).render(<App />);
