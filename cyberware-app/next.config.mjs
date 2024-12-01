/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Matches all .svg files
        use: ['@svgr/webpack'], // Use @svgr/webpack to handle SVGs
      });
      return config;
    },
  };
  
  export default nextConfig;