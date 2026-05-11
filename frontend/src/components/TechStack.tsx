const TOOL_STACK = [
  {
    label: "WordPress",
    logo: "/assets/techstack/optimized/wordpress.png",
    compact: true,
  },
  {
    label: "Sanity",
    logo: "/assets/techstack/optimized/sanity.png",
    compact: true,
  },
  { label: "Webflow", logo: "/assets/techstack/optimized/webflow.png" },
  { label: "Shopify", logo: "/assets/techstack/optimized/shopify.png" },
  {
    label: "Next.js",
    logo: "/assets/techstack/optimized/next.js.png",
    compact: true,
  },
  {
    label: "Google Analytics",
    logo: "/assets/techstack/optimized/ga.png",
  },
  {
    label: "Google Search Console",
    logo: "/assets/techstack/optimized/gsc.png",
  },
  { label: "Meta", logo: "/assets/techstack/optimized/meta.png" },
  { label: "Klaviyo", logo: "/assets/techstack/optimized/klaviyo.png" },
  {
    label: "Mailchimp",
    logo: "/assets/techstack/optimized/mailchimp.png",
    compact: true,
  },
  { label: "HubSpot", logo: "/assets/techstack/optimized/hubspot.png" },
];

function ToolRail({ reverse = false }: { reverse?: boolean }) {
  const tools = [...TOOL_STACK, ...TOOL_STACK];

  return (
    <div
      className={`flex w-max gap-4 ${reverse ? "tech-rail-reverse" : "tech-rail"}`}
      aria-hidden="true"
    >
      {tools.map((tool, index) => (
        <div
          key={`${tool.label}-${index}`}
          className="flex h-20 min-w-[156px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 shadow-[0_20px_80px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all hover:border-brand-gold/30 hover:bg-white/[0.055]"
          title={tool.label}
        >
          <img
            src={tool.logo}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`max-h-10 object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 ${
              tool.compact ? "max-w-10" : "max-w-28"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy py-12"
      aria-label="Tech stack and client-friendly tools"
    >
      <h2 className="sr-only">Tech stack and tools</h2>
      {/* <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-brand-gold/15 to-transparent" /> */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-brand-navy to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-brand-navy to-transparent" />

      <div className="space-y-5 opacity-85">
        <ToolRail />
        <ToolRail reverse />
      </div>
    </section>
  );
}
