export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "FL IMS Website",
    year: 2025,
    description:
      "A modern and minimalist business website built for a Florida-based client. The site highlights their services and portfolio with a clean design focused on user experience. Key features include an appointment booking system that directly syncs with the client’s personal calendar, eliminating the need for manual tracking. The contact form is integrated with email notifications, so the client receives inquiries instantly without logging into an admin panel. The overall goal was to provide a simple yet powerful online presence that is easy for customers to use and efficient for the client to manage.",
    url: "https://fl-ims.com/",
  },
  {
    title: "AI Post Generation Plugin",
    year: 2025,
    description:
      "A complete WordPress plugin designed to automate post creation using AI. The plugin generates text content through the OpenAI API and creates images using a Stable Diffusion module hosted via API. It supports batch prompt processing, where thousands of prompts can be uploaded and scheduled for automatic post generation over time. With built-in cron job support, posts are created according to the configured frequency without any manual effort. Users can fully customize both OpenAI and Stable Diffusion parameters to control the quality, style, and output of posts. This plugin enables hands-free, AI-powered content publishing at scale.",
    url: "",
  },
  {
    title: "MedZone Pharma Website",
    year: 2025,
    description:
      "A professional, feature-rich website developed for a global pharmaceutical exporter. The platform includes an advanced admin panel where the client can manage every aspect of the site—from products and categories to social media links, testimonials, and inquiries. For bulk management, products can be uploaded using CSV or Excel files. When customers raise inquiries for medicines, the client receives real-time push notifications on their device, ensuring fast response times. The site’s modern design makes it easy for visitors to find and request medicines, while the backend tools give the client complete control and flexibility.",
    url: "https://www.medzonepharmagroup.com/",
  },
  {
    title: "Copy Trading Platform",
    year: 2024,
    description:
      "A private copy trading system built for high efficiency and reliability. The platform connects master accounts with multiple client accounts, automatically replicating trades in real time. It supports integrations with Zerodha and AngelOne brokers. Advanced features include basket trading (similar to Zerodha baskets), where masters can execute grouped trades directly from the platform. The system also allows masters to control which client accounts receive specific trades, based on predefined parameters and filters. The solution is optimized for low-latency execution to ensure trades are mirrored quickly and accurately.",
    url: "",
  },
  {
    title: "FinSharp – Stock Market Game",
    year: 2024,
    description:
      "A multiplayer digital board game designed to replicate the dynamics of the stock market in a fun and engaging way. Players start with a balance that they can use to buy, sell, or short-sell shares of virtual companies, with stock prices changing dynamically during the game. Special ability cards are randomly assigned to players, introducing fun twists such as doubling profits, locking stock prices, or restricting other players’ actions. The game supports up to 48 players on a single server, making it ideal for group play and competitive challenges. FinSharp blends financial education with entertainment, creating a realistic yet playful stock trading experience.",
    url: "",
  },
];
