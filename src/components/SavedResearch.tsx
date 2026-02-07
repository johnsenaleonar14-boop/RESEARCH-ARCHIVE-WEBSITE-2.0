import React from 'react';
import { Star, FileText } from 'lucide-react';
import { MOCK_DATA } from '../data';

interface SavedResearchProps {
  savedItems: Set<string>;
  toggleSave: (id: string) => void;
}

export function SavedResearch({ savedItems, toggleSave }: SavedResearchProps) {
  const savedData = MOCK_DATA.filter(item => savedItems.has(item.id));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
          <Star size={32} fill="currentColor" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Saved Research</h2>
          <p className="text-slate-500">Your collection of favorited theses and dissertations.</p>
        </div>
      </div>

      <div className="bg-white rounded-[20px] shadow-sm border border-slate-100 overflow-hidden">
        {savedData.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {savedData.map((item) => (
              <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg text-slate-500 shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.author} • {item.year} • {item.strand}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <button className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                    View
                  </button>
                  <button 
                    onClick={() => toggleSave(item.id)}
                    className="p-2 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-red-50 hover:text-red-500 transition-colors"
                    title="Remove from saved"
                  >
                    <Star size={20} fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 px-4">
            <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star size={48} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No saved research yet</h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              Star items from the dashboard to add them to your collection for quick access.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
