const port = process.env.APP_PORT || 3000;

export const websiteDomain = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${port}`;

const api_domain = process.env.API_URL;

export const appInfo = {
    appName: "Chat App",
    websiteDomain,
    apiDomain: api_domain,
};
