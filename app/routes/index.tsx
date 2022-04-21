// imports - REMIX
import type { MetaFunction, LinksFunction } from "@remix-run/node";
// imports - STYLES
import stylesLanding from "~/styles/landing.css";
// imports - LOGO
import Guy from "~/images/gsap-guy.svg";

// * LINKS
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesLanding }];
};

export default function Index() {
  return (
    <div className="container">
      <div className="inner">
        <div className="logo">
          <img src={Guy} alt="GSAP Guy" />
        </div>
        <div className="prose">
          <h1>GSAP&nbsp;Sandbox</h1>
          <p>
            You reached a satellite of{" "}
            <a href="tobiasriemenschneider.com">tobiasriemenschneider.com</a>.
          </p>
          <p>
            This specific one is used to play around with{" "}
            <a href="https://greensock.com/gsap/">GSAP from Greensock</a>, the
            professional-grade animation platform for the web..
          </p>
          <p>
            Feel free to go{" "}
            <a href="https://tobiasriemenschneider.com/gsap-sandbox">here</a> to
            get some more info.
          </p>
        </div>
      </div>
    </div>
  );
}
