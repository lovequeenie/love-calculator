import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "kovt9fkbhvmfdlcu.public.blob.vercel-storage.com",
			},
		],
	},
};

export default nextConfig;
