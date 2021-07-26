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

const CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com;
  child-src *.google.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.rsms.me/inter/*;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: CSP.replace(/\n/g, ""),
  },
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
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];
