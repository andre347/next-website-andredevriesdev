module.exports = {
  images: {
    domains: [
      "res.cloudinary.com", // for header image
      "theinformationlab.co.uk", // for Information Lab Images
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // RSS feed
    if (isServer) {
      require("./lib/generate-rss");
    }
    return config;
  },
};
