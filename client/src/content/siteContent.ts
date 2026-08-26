// Design note: Contemporary Digital Atelier — content is structured here so it can later be replaced by a secure Supabase source without changing page components.

export type ContactDestination = {
  label: string;
  note: string;
  href?: string;
};

export const studio = {
  name: "Dev Yeasin",
  descriptor: "Independent digital studio",
  location: "Kumarkhali, Bangladesh",
  positioning: "Independent web and systems specialist for businesses that need a sharper digital front door.",
  availability: "Open to scoped projects and remote-role conversations.",
};

const configuredPublicAssetBase = import.meta.env.VITE_PUBLIC_ASSET_BASE_URL || "";
const detectedGitHubPagesAssetBase =
  typeof window !== "undefined" && window.location.hostname === "devyeasin24.github.io"
    ? `${window.location.origin}/media`
    : "";
const publicAssetBase = (configuredPublicAssetBase || detectedGitHubPagesAssetBase).replace(/\/+$/, "");

function publicAssetUrl(fileName: string, manusFallback: string) {
  return publicAssetBase ? `${publicAssetBase}/${fileName}` : manusFallback;
}

export const portraitUrl =
  import.meta.env.VITE_PORTRAIT_URL ||
  publicAssetUrl("dev-yeasin-authentic-portrait-2000.png", "/manus-storage/dev-yeasin-authentic-portrait-2000_a407a130.png");

export const services = [
  {
    index: "01",
    title: "Storefront experience",
    eyebrow: "Shopify / PageFly / Liquid",
    description: "Landing pages and storefront surfaces with a clearer path from product story to next action.",
    scope: "Campaign pages, collection narratives, product-page refinement, and interface implementation.",
  },
  {
    index: "02",
    title: "Website foundations",
    eyebrow: "WordPress / Elementor / HTML & CSS",
    description: "Responsive business websites and redesigns built to make an organisation easier to understand and contact.",
    scope: "Clear page architecture, adaptable sections, content placement, and handover-ready builds.",
  },
  {
    index: "03",
    title: "Customer journeys",
    eyebrow: "HighLevel / Systeme.io / Forms",
    description: "Practical funnel pages and follow-up systems for teams that need more clarity after a click or form submission.",
    scope: "Landing-page flow, form structure, basic automation setup, and operational handover.",
  },
];

export const workingPrinciples = [
  ["A useful brief", "The objective, audience, platform, available source material, and success condition are made clear before building."],
  ["Visible progress", "Work moves in understandable stages so feedback arrives while it can still improve the outcome."],
  ["Clean handover", "The final output is prepared for the next person who needs to edit, operate, or extend it."],
] as const;

export const contactDestinations: ContactDestination[] = [
  { label: "Book a consultation", note: "30-minute project conversation", href: "https://calendly.com/devyeasin-pro/30min" },
  { label: "Send an email", note: "devyeasin.pro@gmail.com", href: "mailto:devyeasin.pro@gmail.com" },
  { label: "Message on WhatsApp", note: "Direct client conversation", href: "https://wa.me/8801909532577" },
];

export const platformDestinations: ContactDestination[] = [
  { label: "Upwork", note: "Freelance profile", href: "https://www.upwork.com/freelancers/~019dda05e5128dc4a4?mp_source=share" },
  { label: "Fiverr", note: "Freelance profile", href: "https://www.fiverr.com/dev_yeasin24" },
  { label: "Fiverr portfolio", note: "Selected public portfolio", href: "https://fiverr.com/s/8zk1lZv" },
  { label: "GitHub", note: "Public code profile", href: "https://github.com/devyeasin24" },
  { label: "LinkedIn", note: "Professional network", href: "https://www.linkedin.com/in/devyeasin24/" },
  { label: "X (Twitter)", note: "Professional updates", href: "https://x.com/dev_yeasin24" },
];

export const evidencePolicy = {
  heading: "Evidence belongs beside its source.",
  body: "Portfolio work, reviews, and platform figures are added only after they can be clearly attributed and publicly shared. Statistics from different platforms are never blended into one headline number.",
};

export const publicRecord = {
  checkedOn: "26 Aug 2026",
  sourceLabel: "Public Upwork profile",
  sourceHref: "https://www.upwork.com/freelancers/~019dda05e5128dc4a4?mp_source=share",
  metrics: [
    { value: "100%", label: "Job Success", detail: "Public Upwork profile" },
    { value: "5.0/5", label: "Client rating", detail: "2 published reviews" },
    { value: "4", label: "Completed jobs", detail: "Visible public records" },
    { value: "7", label: "Portfolio items", detail: "Visible public portfolio" },
  ],
};

export const fiverrRecord = {
  checkedOn: "26 Aug 2026",
  sourceLabel: "Public Fiverr profile",
  sourceHref: "https://www.fiverr.com/dev_yeasin24?public_mode=true",
  metrics: [
    { value: "Level 2", label: "Seller status", detail: "Visible public Fiverr status" },
    { value: "4.9/5", label: "Public rating", detail: "91 published reviews" },
    { value: "172", label: "Projects delivered", detail: "Seller statement in public Fiverr bio" },
  ],
};

export const selectedWork = [
  {
    index: "01",
    title: "Systeme.io digital-product funnel",
    category: "Landing flow / automation",
    scope: "Landing-page build, email sequence setup, multi-step checkout structure, and digital-product delivery workflow.",
    tags: ["Systeme.io", "Email workflow", "Checkout flow"],
    image: publicAssetUrl("systemeio-digital-product-funnel-public-preview.png", "/manus-storage/systemeio-digital-product-funnel-public-preview_6af26311.png"),
    alt: "Public Fiverr portfolio preview for a Systeme.io digital-product funnel",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio?utm_medium=shared&utm_source=copy_link&utm_campaign=portfolio&utm_term=8zk1lZv",
  },
  {
    index: "02",
    title: "Shopify storefront design & maintenance",
    category: "Storefront / collections",
    scope: "Shopify storefront design and maintenance for a multi-collection apparel catalogue.",
    tags: ["Shopify", "Catalogue", "Maintenance"],
    image: publicAssetUrl("shopify-web-design-public-preview.png", "/manus-storage/shopify-web-design-public-preview_784e89e1.png"),
    alt: "Public Fiverr portfolio preview for Shopify storefront design and maintenance",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio?utm_medium=shared&utm_source=copy_link&utm_campaign=portfolio&utm_term=8zk1lZv",
  },
  {
    index: "03",
    title: "Portland Ace Force Bootcamp funnel",
    category: "Fitness & wellness / funnel flow",
    scope: "Three-page funnel covering a landing page, service overview, thank-you page, CTA structure, and mobile optimisation.",
    tags: ["Funnel design", "CTA structure", "Mobile build"],
    image: publicAssetUrl("portland-ace-force-fitness-funnel-public-preview.png", "/manus-storage/portland-ace-force-fitness-funnel-public-preview_c91665db.png"),
    alt: "Public Fiverr portfolio preview for the Portland Ace Force Bootcamp three-page funnel",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio/Njg3YTY0NjZmOTBhZjAwMDAxNTViMjdh",
  },
];

export const workCaseStudies = [
  {
    index: "01",
    title: "Systeme.io digital-product funnel",
    category: "Landing flow / automation",
    context:
      "A public Fiverr portfolio record for a digital-product customer journey, organised from the first landing-page visit through checkout and product delivery.",
    role:
      "Landing-page build, email sequence setup, multi-step checkout structure, and digital-product delivery workflow.",
    deliverables: ["Landing page", "Automated email sequences", "Multi-step checkout", "Digital-product delivery flow"],
    buildDetail:
      "The public record identifies Systeme.io as the delivery platform. This case record documents the visible scope only; it does not state conversion, revenue, or sales outcomes.",
    image: publicAssetUrl("systemeio-digital-product-funnel-public-preview.png", "/manus-storage/systemeio-digital-product-funnel-public-preview_6af26311.png"),
    alt: "Public Fiverr portfolio preview for a Systeme.io digital-product funnel",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio?utm_medium=shared&utm_source=copy_link&utm_campaign=portfolio&utm_term=8zk1lZv",
  },
  {
    index: "02",
    title: "Shopify storefront design & maintenance",
    category: "Storefront / collections",
    context:
      "A public Fiverr portfolio record for a Shopify apparel storefront with multiple product collections.",
    role:
      "Shopify storefront design and maintenance, with a focus on presenting a multi-collection product catalogue.",
    deliverables: ["Storefront design", "Collection presentation", "Product-catalogue surface", "Maintenance scope"],
    buildDetail:
      "The public record supports the Shopify platform and multi-collection context. It does not identify the client here or make claims about storefront performance or an ongoing business relationship.",
    image: publicAssetUrl("shopify-web-design-public-preview.png", "/manus-storage/shopify-web-design-public-preview_784e89e1.png"),
    alt: "Public Fiverr portfolio preview for Shopify storefront design and maintenance",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio?utm_medium=shared&utm_source=copy_link&utm_campaign=portfolio&utm_term=8zk1lZv",
  },
  {
    index: "03",
    title: "Portland Ace Force Bootcamp funnel",
    category: "Fitness & wellness / funnel flow",
    context:
      "A public Fiverr portfolio record for a fitness and wellness customer journey arranged across three connected pages.",
    role:
      "Three-page funnel implementation covering the landing page, service overview, thank-you page, CTA structure, and mobile optimisation.",
    deliverables: ["Landing page", "Service overview", "Thank-you page", "CTA structure", "Mobile optimisation"],
    buildDetail:
      "The original public record is retained as the source. This page records its stated delivery scope and does not repeat unverified lead-generation, trust, or conversion language.",
    image: publicAssetUrl("portland-ace-force-fitness-funnel-public-preview.png", "/manus-storage/portland-ace-force-fitness-funnel-public-preview_c91665db.png"),
    alt: "Public Fiverr portfolio preview for the Portland Ace Force Bootcamp three-page funnel",
    sourceHref: "https://www.fiverr.com/users/dev_yeasin24/portfolio/Njg3YTY0NjZmOTBhZjAwMDAxNTViMjdh",
  },
];

export const internationalAudienceNote = {
  status: "Verification pending",
  body: "Dev reported an international Fiverr audience. The raw country figures currently supplied do not form one valid percentage distribution, so they are intentionally not displayed until a source export and reporting period are confirmed.",
};
