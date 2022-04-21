// imports - REMIX
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// imports - STYLES
import stylesGlobal from "./styles/global.css";
import stylesFonts from "./styles/font-faces.css";
import stylesNormalize from "./styles/normalize.css";

// * META
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "GSAP Sandbox | gsap.tobiasriemenschneider.com",
  viewport: "width=device-width,initial-scale=1",
});

// * LINKS
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesGlobal },
    { rel: "stylesheet", href: stylesFonts },
    { rel: "stylesheet", href: stylesNormalize },
  ];
};

// * DEFAULT EXPORT
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
