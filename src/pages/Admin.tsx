import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProjects, Project } from '../hooks/useProjects';
import { db } from '../firebase';
import { collection, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { LogOut, Plus, Trash2, Edit2, Save, X } from 'lucide-react';

export default function Admin() {
  const { user, loading: authLoading, isAdmin, login, logout } = useAuth();
  const { projects, loading: projectsLoading } = useProjects();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Project>>({});
  const [isAdding, setIsAdding] = useState(false);

  if (authLoading || projectsLoading) {
    return <div className="min-h-screen bg-bg-main flex items-center justify-center text-text-primary">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center text-text-primary p-6">
        <h1 className="text-4xl font-display uppercase mb-6">Admin Access</h1>
        <button 
          onClick={login}
          className="px-6 py-3 bg-text-primary text-bg-main font-medium uppercase tracking-widest hover:bg-text-secondary transition-colors"
        >
          Login with Google
        </button>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center text-text-primary p-6">
        <h1 className="text-4xl font-display uppercase mb-4">Access Denied</h1>
        <p className="text-text-secondary mb-6">You do not have permission to view this page.</p>
        <button 
          onClick={logout}
          className="px-6 py-3 border border-text-primary/20 hover:bg-text-primary/5 transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  const handleSave = async (id: number) => {
    try {
      const projectToSave = { ...projects.find(p => p.id === id), ...editForm } as Project;
      
      if (!projectToSave.docId) {
        // If it doesn't have a docId, it might be from the static fallback. 
        // We need to create it in Firestore.
        const newDocRef = doc(collection(db, 'projects'));
        await setDoc(newDocRef, projectToSave);
      } else {
        const docRef = doc(db, 'projects', projectToSave.docId);
        await updateDoc(docRef, { ...projectToSave });
      }
      
      setEditingId(null);
      setEditForm({});
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Check console for details.");
    }
  };

  const handleAdd = async () => {
    try {
      const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
      const newProject: Project = {
        id: newId,
        title: editForm.title || "New Project",
        category: editForm.category || "Category",
        image: editForm.image || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop&grayscale",
        summary: editForm.summary || "Summary",
        colSpan: editForm.colSpan || "col-span-12 lg:col-span-6",
        aspect: editForm.aspect || "aspect-square",
        description: editForm.description || "Description",
        client: editForm.client || "Client",
        year: editForm.year || new Date().getFullYear().toString(),
        services: editForm.services || ["Service 1", "Service 2"]
      };

      const newDocRef = doc(collection(db, 'projects'));
      await setDoc(newDocRef, newProject);
      setIsAdding(false);
      setEditForm({});
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Check console for details.");
    }
  };

  const handleDelete = async (docId?: string) => {
    if (!docId) {
      alert("Cannot delete static fallback data. Please edit it to save it to the database first.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, 'projects', docId));
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project. Check console for details.");
      }
    }
  };

  const seedDatabase = async () => {
    if (window.confirm("This will copy all static projects to the database. Continue?")) {
      try {
        for (const p of projects) {
          if (!p.docId) {
            const newDocRef = doc(collection(db, 'projects'));
            await setDoc(newDocRef, p);
          }
        }
        alert("Database seeded successfully!");
      } catch (error) {
        console.error("Error seeding database:", error);
        alert("Failed to seed database.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-text-primary/10 pb-6">
          <h1 className="text-4xl font-display uppercase tracking-tight">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button 
              onClick={seedDatabase}
              className="px-4 py-2 text-sm border border-text-primary/20 hover:bg-text-primary/5 transition-colors"
            >
              Seed Database
            </button>
            <button 
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-text-primary text-bg-main hover:bg-text-secondary transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-display uppercase">Projects</h2>
          <button 
            onClick={() => { setIsAdding(true); setEditForm({}); }}
            className="flex items-center gap-2 px-4 py-2 bg-text-primary text-bg-main text-sm uppercase tracking-widest hover:bg-text-secondary transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Project
          </button>
        </div>

        {isAdding && (
          <div className="bg-bg-panel p-6 mb-8 border border-text-primary/10">
            <h3 className="text-xl font-display uppercase mb-4">New Project</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Title" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, title: e.target.value})} />
              <input type="text" placeholder="Category" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, category: e.target.value})} />
              <input type="text" placeholder="Image URL" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, image: e.target.value})} />
              <input type="text" placeholder="Summary" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, summary: e.target.value})} />
              <input type="text" placeholder="Client" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, client: e.target.value})} />
              <input type="text" placeholder="Year" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, year: e.target.value})} />
              <input type="text" placeholder="colSpan (e.g. col-span-12 lg:col-span-6)" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, colSpan: e.target.value})} />
              <input type="text" placeholder="aspect (e.g. aspect-square)" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, aspect: e.target.value})} />
              <textarea placeholder="Description" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary md:col-span-2" rows={3} onChange={e => setEditForm({...editForm, description: e.target.value})}></textarea>
              <input type="text" placeholder="Services (comma separated)" className="bg-bg-main border border-text-primary/20 p-2 text-text-primary md:col-span-2" onChange={e => setEditForm({...editForm, services: e.target.value.split(',').map(s => s.trim())})} />
            </div>
            <div className="flex gap-2">
              <button onClick={handleAdd} className="flex items-center gap-2 px-4 py-2 bg-text-primary text-bg-main text-sm hover:bg-text-secondary transition-colors"><Save className="w-4 h-4" /> Save</button>
              <button onClick={() => setIsAdding(false)} className="flex items-center gap-2 px-4 py-2 border border-text-primary/20 text-sm hover:bg-text-primary/5 transition-colors"><X className="w-4 h-4" /> Cancel</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-bg-panel p-6 border border-text-primary/10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              {editingId === project.id ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" defaultValue={project.title} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, title: e.target.value})} />
                  <input type="text" defaultValue={project.category} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, category: e.target.value})} />
                  <input type="text" defaultValue={project.image} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, image: e.target.value})} />
                  <input type="text" defaultValue={project.summary} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, summary: e.target.value})} />
                  <input type="text" defaultValue={project.client} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, client: e.target.value})} />
                  <input type="text" defaultValue={project.year} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, year: e.target.value})} />
                  <input type="text" defaultValue={project.colSpan} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, colSpan: e.target.value})} />
                  <input type="text" defaultValue={project.aspect} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary" onChange={e => setEditForm({...editForm, aspect: e.target.value})} />
                  <textarea defaultValue={project.description} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary md:col-span-2" rows={3} onChange={e => setEditForm({...editForm, description: e.target.value})}></textarea>
                  <input type="text" defaultValue={project.services.join(', ')} className="bg-bg-main border border-text-primary/20 p-2 text-text-primary md:col-span-2" onChange={e => setEditForm({...editForm, services: e.target.value.split(',').map(s => s.trim())})} />
                  
                  <div className="md:col-span-2 flex gap-2 mt-2">
                    <button onClick={() => handleSave(project.id)} className="flex items-center gap-2 px-4 py-2 bg-text-primary text-bg-main text-sm hover:bg-text-secondary transition-colors"><Save className="w-4 h-4" /> Save</button>
                    <button onClick={() => setEditingId(null)} className="flex items-center gap-2 px-4 py-2 border border-text-primary/20 text-sm hover:bg-text-primary/5 transition-colors"><X className="w-4 h-4" /> Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <img src={project.image} alt={project.title} className="w-24 h-24 object-cover grayscale" referrerPolicy="no-referrer" />
                    <div>
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight">{project.title}</h3>
                      <p className="text-sm text-text-secondary">{project.category} • {project.year}</p>
                      {!project.docId && <span className="inline-block mt-2 text-xs bg-text-primary/10 px-2 py-1">Static Data (Not in DB)</span>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { setEditingId(project.id); setEditForm(project); }}
                      className="p-2 border border-text-primary/20 hover:bg-text-primary/5 transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(project.docId)}
                      className="p-2 border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
          {projects.length === 0 && !isAdding && (
            <div className="text-center py-12 text-text-secondary border border-dashed border-text-primary/20">
              No projects found. Add one to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
