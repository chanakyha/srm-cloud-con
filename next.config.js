/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "scontent-tir3-1.cdninstagram.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
