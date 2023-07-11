import React from "react";
import SessionReact from "supertokens-auth-react/recipe/session";
import SuperTokensReact from "supertokens-auth-react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

// const session = useSessionContext();

// async function logoutClicked() {
//     await SessionReact.signOut();
//     SuperTokensReact.redirectToAuth();
// }

// async function fetchUserData() {
//     const res = await fetch("/api/user");
//     if (res.status === 200) {
//         const json = await res.json();
//         alert(JSON.stringify(json));
//     }
// }

// if (session.loading === true) {
//     return null;
// }

export default function Home(props) {
    return (
        <SessionReact.SessionAuth>
            <div>Hello, World</div>
        </SessionReact.SessionAuth>
    );
}
