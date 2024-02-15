/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost"
            },
            {
                protocol: "http",
                hostname: "127.0.0.1"
            },
            {
                protocol: "https",
                hostname: "nate-soul-api.vercel.app"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            }
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    }
}

module.exports = nextConfig
