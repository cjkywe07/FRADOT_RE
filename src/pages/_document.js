import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="ko">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script
                    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fef621a5e6860ba3d2c33b759318ccf6&libraries=services,clusterer,drawing&autoload=false"
                    strategy="beforeInteractive"
                />
            </body>
        </Html>
    );
}
