import "../styles/globals.css";
import Navigation from "./Components/navigation";

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
