/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'user-images.githubusercontent.com',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}


export default nextConfig;
