/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // This ensures images work without optimization in static exports
    },
  };
  
  export default nextConfig;