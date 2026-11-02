import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Every page is static, so ship plain HTML to Workers static assets.
    // Running Next on the Worker cost ~150ms CPU per page view and blew
    // through the free tier's 10ms limit.
    output: "export",
    // Static export has no image optimizer; serve the files as they are.
    images: { unoptimized: true },
};

export default nextConfig;
