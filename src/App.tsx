import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { UploadResearch } from './components/UploadResearch';
import { SavedResearch } from './components/SavedResearch';
import { Guidelines } from './components/Guidelines';
import { ChangePasswordModal } from './components/ChangePasswordModal';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Toaster } from 'sonner';

export type View = 'dashboard' | 'upload' | 'saved' | 'guidelines';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [authView, setAuthView] = useState<'login' | 'register'>('login');
  
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  // Mock data for saved items to share state (simplified for frontend demo)
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set());

  const toggleSave = (id: string) => {
    const newSaved = new Set(savedItems);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedItems(newSaved);
  };

  if (!isAuthenticated) {
    if (authView === 'login') {
      return (
        <Login 
          onLogin={() => setIsAuthenticated(true)} 
          onNavigateToRegister={() => setAuthView('register')} 
        />
      );
    } else {
      return (
        <Register 
          onRegister={(role, name) => {
            setIsAuthenticated(true);
            setUserRole(role);
            setUserName(name);
            toast.success(`Welcome ${name}! Registered as ${role}.`);
          }} 
          onNavigateToLogin={() => setAuthView('login')} 
        />
      );
    }
  }

  return (
    <div className="flex h-screen w-full bg-[#f4f6f8] font-sans text-slate-900">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        openPasswordModal={() => setIsPasswordModalOpen(true)}
        userRole={userRole}
      />
      
      <main className="flex-1 overflow-y-auto h-full p-8 relative">
        <div className="max-w-7xl mx-auto h-full">
          {currentView === 'dashboard' && <Dashboard savedItems={savedItems} toggleSave={toggleSave} />}
          {currentView === 'upload' && <UploadResearch />}
          {currentView === 'saved' && <SavedResearch savedItems={savedItems} toggleSave={toggleSave} />}
          {currentView === 'guidelines' && <Guidelines />}
        </div>
      </main>

      <ChangePasswordModal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)} 
      />
      <Toaster position="top-right" />
    </div>
  );
}
