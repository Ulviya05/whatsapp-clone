import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from "react";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import * as SuperTokensConfig from "../config/frontendConfig";
import Session from "supertokens-auth-react/recipe/session";

if (typeof window !== "undefined") {
    console.log("init")
    SuperTokens.init(SuperTokensConfig.frontendConfig());
}

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        async function doRefresh() {
            if (pageProps.fromSupertokens === "needs-refresh") {
                if (await Session.attemptRefreshingSession()) {
                    location.reload();
                } else {
                    // user has been logged out
                    SuperTokens.redirectToAuth();
                }
            }
        }
        doRefresh();
    }, [pageProps.fromSupertokens]);
    if (pageProps.fromSupertokens === "needs-refresh") {
        return null;
    }

    return (
        <SuperTokensWrapper>
            <Component {...pageProps} />
        </SuperTokensWrapper>
    );
}

export default MyApp;
