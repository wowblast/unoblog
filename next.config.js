/** @type {import('next').NextConfig} */
const nextConfig = {  
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com","static-cdn.jtvnw.net"],
    
    
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
