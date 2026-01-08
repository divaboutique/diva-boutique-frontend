import { LangProvider } from "../context/LanguageContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
