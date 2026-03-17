export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  colSpan: string;
  aspect: string;
  description: string;
  client: string;
  year: string;
  role: string;
  services: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Aura",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop",
    summary: "Minimalist skincare brand focusing on natural ingredients.",
    colSpan: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/3]",
    description: "Aura is a modern skincare brand that emphasizes natural ingredients and sustainable packaging. The identity was designed to reflect purity, simplicity, and elegance. The logo features a custom sans-serif typeface with subtle organic curves, paired with a muted, earthy color palette.",
    client: "Aura Skincare",
    year: "2023",
    role: "Lead Designer",
    services: ["Logo Design", "Packaging", "Brand Guidelines"],
    images: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    title: "Nexus",
    category: "Tech Startup",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    summary: "Geometric identity for an AI-driven analytics platform.",
    colSpan: "col-span-12 md:col-span-5",
    aspect: "aspect-[3/4]",
    description: "Nexus provides AI-driven analytics for enterprise businesses. The brand identity needed to convey trust, precision, and forward-thinking technology. We developed a geometric logo mark that symbolizes connection and data flow, complemented by a stark black and white palette with neon accents.",
    client: "Nexus Analytics",
    year: "2024",
    role: "Brand Designer",
    services: ["Visual Identity", "UI/UX Design", "Iconography"],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    title: "Lumina",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    summary: "Elegant typography for a boutique architectural firm.",
    colSpan: "col-span-12 md:col-span-5",
    aspect: "aspect-[3/4]",
    description: "Lumina is a boutique architectural firm specializing in modern, light-filled residential spaces. The identity relies heavily on elegant, high-contrast serif typography to convey sophistication and timelessness. The logo is designed to be used as a subtle watermark on architectural plans and presentations.",
    client: "Lumina Architects",
    year: "2023",
    role: "Art Director",
    services: ["Typography", "Stationery", "Web Design"],
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    title: "Verve",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
    summary: "Bold and energetic branding for a specialty coffee roaster.",
    colSpan: "col-span-12 md:col-span-7",
    aspect: "aspect-[4/3]",
    description: "Verve is a specialty coffee roaster focused on single-origin beans. The brand needed to stand out on crowded cafe shelves. We created a bold, energetic identity using vibrant colors and dynamic typography that reflects the lively atmosphere of their flagship cafe.",
    client: "Verve Coffee Roasters",
    year: "2022",
    role: "Designer",
    services: ["Brand Identity", "Packaging", "Merchandise"],
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
    ]
  }
];

export const siteContent = {
  heroTitle: "CLARITY IN FORM",
  heroSubtitle: "Crafting clean, strategic, and memorable logo identities for modern brands.",
  aboutText: "I am a brand identity designer with over 4 years of experience helping companies distill their core values into clear, impactful visual systems. My approach is rooted in minimalism—stripping away the unnecessary to reveal the essential. I believe that a great logo is not just a mark, but the foundation of a brand's entire visual language.",
  aboutTools: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Procreate"
  ],
  about: {
    title: "About",
    description: "I am a brand identity designer with over 4 years of experience helping companies distill their core values into clear, impactful visual systems. My approach is rooted in minimalism—stripping away the unnecessary to reveal the essential. I believe that a great logo is not just a mark, but the foundation of a brand's entire visual language.",
    experience: [
      {
        id: "1",
        role: "Senior Designer",
        company: "Studio Minimal",
        year: "2021 — Present"
      },
      {
        id: "2",
        role: "Brand Designer",
        company: "Design Co.",
        year: "2018 — 2021"
      },
      {
        id: "3",
        role: "Junior Designer",
        company: "Creative Agency",
        year: "2016 — 2018"
      }
    ]
  }
};
