import "../styles/global.scss"
import English from "../content/compiled-locales/en.json"
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import {useMemo} from "react";
import {IntlProvider} from "react-intl";

function MyApp({ Component, pageProps }: AppProps) {
    const { locale } = useRouter();
    const [shortLocale] = locale ? locale.split("-") : ["en"];

    const messages = useMemo(() => {
        switch (shortLocale) {
            case "en":
                return English;
            default:
                return English;
        }
    }, [shortLocale]);

  return (
      <IntlProvider
        locale={shortLocale}
        messages={messages}
        onError={() => null}>
        <Component {...pageProps} />
      </IntlProvider>
      )
}

export default MyApp
