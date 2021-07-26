module.exports = {
  images: {
    domains: [
      "res.cloudinary.com", // for header image
      "theinformationlab.co.uk", // for Information Lab Images
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // RSS feed
    if (isServer) {
      require("./lib/generate-rss");
    }
    return config;
  },
};

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];
