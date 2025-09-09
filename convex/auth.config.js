// Configure Convex auth to use Clerk. The domain should match your Clerk instance issuer.
// Set CLERK_ISSUER in .env.local, e.g. "https://your-subdomain.clerk.accounts.dev"
const authConfig = {
  providers: [
    {
      domain: process.env.CLERK_ISSUER_URL,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
