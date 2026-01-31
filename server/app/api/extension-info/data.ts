export const extensionInfo = {
  latestVersion: "1.4.0",
  minimumVersion: "1.0.0",
  releaseDate: "2026-01-31",
  downloadUrl: "https://chromewebstore.google.com/detail/quickerp/gafmfinhhfaocnchccamogkeemjfboin",
  changelog: {
    "1.4.0": {
      date: "2026-01-31",
      changes: [
        "Updated to open in sidepanel"
      ],
      breaking: false,
      critical: false
    },
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
    }
  },
  notifications: [
    {
      id: "erp-maintenance-jan-2026",
      type: "warning",
      title: "System Maintenance",
      message: "The ERP system is currently under maintenance and will be available after 6:00 AM on 1st February 2026. They are performing scheduled maintenance to improve performance, security, and reliability.",
      buttons: [],
      dismissible: false,
      priority: "high",
      validFrom: "2026-01-30",
      validUntil: "2026-02-01T12:00:00"
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
