const nextConfig = {
    reactStrictMode: true,
  };
  
  module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
        },
      ],
    },
    pageExtensions: ["js"],
    basePath: "",
  };
  