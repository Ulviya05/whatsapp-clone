/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        "APP_PORT": 3000,
        "API_URL": "http://localhost:5555"
    }
};

module.exports = nextConfig;
