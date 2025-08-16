export const SOCIAL_LINKS = {
  github: {
    label: "GitHub",
    url: "https://github.com/alexchen",
    username: "@alexchen"
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/alexchen",
    username: "in/alexchen"
  },
  email: {
    label: "Email",
    address: "alex.chen@example.com",
    url: "mailto:alex.chen@example.com"
  },
  calendly: {
    label: "Schedule a Call",
    url: "https://calendly.com/alexchen",
    username: "Book 30min call"
  }
} as const;

export const EMAIL_ADDRESS = SOCIAL_LINKS.email.address;
export const EMAIL_URL = SOCIAL_LINKS.email.url;
export const GITHUB_URL = SOCIAL_LINKS.github.url;
export const LINKEDIN_URL = SOCIAL_LINKS.linkedin.url;
export const CALENDLY_URL = SOCIAL_LINKS.calendly.url;
