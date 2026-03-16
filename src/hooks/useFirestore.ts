import { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export interface Project {
  id: number;
  title: string;
  summary: string;
  category: string;
  aspect: string;
  image: string;
  images: string[];
  client: string;
  role: string;
  year: string;
  description: string;
  colSpan: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  aboutTools: string[];
  contactEmail: string;
}

const defaultSiteContent: SiteContent = {
  heroTitle: "Foysal is a logo designer.",
  heroSubtitle: "Crafting minimal, timeless identities for modern brands.",
  aboutText: "I am a logo designer specializing in minimal, timeless identities. I approach every project with a focus on clarity, purpose, and aesthetic longevity. My goal is to distill complex brand stories into simple, memorable marks that stand the test of time.",
  aboutTools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"],
  contactEmail: "hello@foysal.design"
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('id', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projs = snapshot.docs.map(doc => doc.data() as Project);
      setProjects(projs);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects:", error);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { projects, loading };
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'siteContent', 'main'), (docSnap) => {
      if (docSnap.exists()) {
        setContent(docSnap.data() as SiteContent);
      } else {
        // Use default content locally if it doesn't exist in DB yet
        setContent(defaultSiteContent);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching site content:", error);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { content, loading };
}
