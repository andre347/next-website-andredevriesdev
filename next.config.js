module.exports = {
  images: {
    domains: [
      "res.cloudinary.com", // for header image
      "theinformationlab.co.uk", // for Information Lab Images
    ],
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
