import GlobalStyle from "@/styles/global.styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>FRADOT</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
