import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  UploadCloud, 
  Star, 
  User, 
  Info, 
  LogOut,
  Lock
} from 'lucide-react';
import { View } from '../App';
import logo from "figma:asset/9002955fbe559018534f06c650cea387b1e255e4.png";

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  openPasswordModal: () => void;
  userRole?: string | null;
}

export function Sidebar({ currentView, setCurrentView, openPasswordModal, userRole }: SidebarProps) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex flex-col items-center justify-center py-4 transition-colors relative group
        ${currentView === view ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
      title={label}
    >
      <Icon size={28} strokeWidth={1.5} />
      <span className="text-[10px] mt-1 font-medium tracking-wide">{label}</span>
      {currentView === view && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-md" />
      )}
    </button>
  );

  return (
    <div className="w-[93px] bg-[#0a0da4] flex flex-col items-center py-4 z-50 shadow-xl shrink-0 h-screen sticky top-0">
      <div className="mb-8 px-2">
        <img src={logo} alt="ACT Logo" className="w-16 h-auto object-contain" />
      </div>

      <div className="flex-1 w-full space-y-2 flex flex-col items-center">
        <NavItem view="dashboard" icon={LayoutDashboard} label="Home" />
        <NavItem view="upload" icon={UploadCloud} label="Upload" />
        <NavItem view="saved" icon={Star} label="Saved" />
        
        {/* Account Menu */}
        <div className="relative w-full">
          <button
            onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
            className={`w-full flex flex-col items-center justify-center py-4 transition-colors
              ${isAccountMenuOpen ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            title="Account"
          >
            <User size={28} strokeWidth={1.5} />
            <span className="text-[10px] mt-1 font-medium tracking-wide">
              {userRole === 'admin' ? 'Admin' : 'Account'}
            </span>
          </button>

          {isAccountMenuOpen && (
            <div className="absolute left-[90px] top-0 bg-white rounded-lg shadow-xl border border-slate-100 py-2 w-48 z-50 overflow-hidden">
              <button
                onClick={() => {
                  openPasswordModal();
                  setIsAccountMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors"
              >
                <Lock size={16} />
                Change Password
              </button>
            </div>
          )}
        </div>

        <NavItem view="guidelines" icon={Info} label="Guide" />
      </div>

      <div className="mt-auto w-full">
         {/* Logout placeholder - visual only as requested generally, but user asked for functionality. 
             Since auth isn't fully set up yet, we'll make it reload or just alert. */}
         <button
          onClick={() => window.location.reload()}
          className="w-full flex flex-col items-center justify-center py-4 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          title="Logout"
        >
          <LogOut size={24} strokeWidth={1.5} />
          <span className="text-[10px] mt-1 font-medium tracking-wide">Logout</span>
        </button>
      </div>
    </div>
  );
}
