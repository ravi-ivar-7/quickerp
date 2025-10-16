export const extensionInfo = {
  latestVersion: "1.3.0",
  minimumVersion: "1.0.0",
  releaseDate: "2025-10-16",
  downloadUrl: "https://chromewebstore.google.com/detail/quickerp/gafmfinhhfaocnchccamogkeemjfboin",
  changelog: {
    "1.3.0": {
      date: "2025-10-16",
      changes: [
        "Updated OAuth client configuration",
        "Added upgrade instructions for existing users",
        "Improved Gmail connection error messages",
        "Enhanced setup guide with security warnings",
        "Added status display on login button"
      ],
      breaking: true,
      critical: true
    },
    "1.2.0": {
      date: "2024-10-01",
      changes: [
        "Improved OTP extraction",
        "Better error handling",
        "UI improvements"
      ],
      breaking: false,
      critical: false
    }
  },
  notifications: [
    {
      id: "oauth-upgrade-2025",
      type: "warning",
      title: "OAuth Configuration Updated",
      message: "If you're upgrading from an older version, you may need to reconnect Gmail. Visit Google Account Permissions and remove old QuickERP access, then reconnect.",
      buttons: [
        {
          text: "View Setup Guide",
          link: "https://quickerp.rknain.com/blogs/setup",
          type: "primary"
        },
        {
          text: "Google Permissions",
          link: "https://myaccount.google.com/permissions",
          type: "secondary"
        }
      ],
      dismissible: true,
      priority: "high",
      validFrom: "2024-10-16",
      validUntil: "2026-11-16"
    },
    {
      id: "chrome-store-review",
      type: "info",
      title: "Enjoying QuickERP?",
      message: "Help us improve by leaving a review on the Chrome Web Store! Your feedback helps other users discover QuickERP.",
      buttons: [
        {
          text: "Rate on Chrome Store",
          link: "https://chromewebstore.google.com/detail/quickerp/gafmfinhhfaocnchccamogkeemjfboin/reviews",
          type: "primary"
        }
      ],
      dismissible: true,
      priority: "low",
      validFrom: "2024-01-01",
      validUntil: "2031-12-31"
    }
  ],
  features: {
    autoOTP: true,
    sessionManagement: true,
    securityQuestions: true,
    gmailIntegration: true
  },
  support: {
    email: "quickerp@rknain.com",
    github: "https://github.com/ravi-ivar-7/quickerp",
    website: "https://quickerp.rknain.com"
  }
};
