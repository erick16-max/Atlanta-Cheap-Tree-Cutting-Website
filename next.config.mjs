/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['mui-tel-input'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com', 
            port: '',
          },
        ],
      },
};


export default nextConfig;