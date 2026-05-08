import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { metadata } from "@/lib/metadata";

import "@/index.css";

const About = lazy(() => import("@/pages/About"));

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href={metadata.icons.icon} />
      </Helmet>
      <Suspense fallback={<main className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
