/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                // hostname: '**', // não barrar nenhum hostname
            },
        ],
    },
};

export default nextConfig;
