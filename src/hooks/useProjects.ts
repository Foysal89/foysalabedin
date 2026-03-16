import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { projects as staticProjects } from '../data/projects';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  colSpan: string;
  aspect: string;
  description: string;
  client: string;
  year: string;
  services: string[];
  docId?: string; // Firestore document ID
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('id', 'asc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const fetchedProjects = snapshot.docs.map(doc => ({
          ...doc.data(),
          docId: doc.id
        })) as Project[];
        setProjects(fetchedProjects);
      } else {
        // Fallback to static data if Firestore is empty
        setProjects(staticProjects);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects:", error);
      // Fallback to static data on error
      setProjects(staticProjects);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { projects, loading };
}
