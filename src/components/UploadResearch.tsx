import React from 'react';
import { UploadCloud, FileText } from 'lucide-react';
import { toast } from "sonner";

export function UploadResearch() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would upload to Supabase
    toast.success("Research uploaded successfully!");
  };

  const strands = [
    "STEM", "HUMMS", "ABM", "TVL-ICT", "TVL-ICT ( HARDWARE )", "TVL-HE", "GAS", "ARTS AND DESIGN"
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <UploadCloud size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Upload Research</h2>
            <p className="text-slate-500">Submit your thesis or dissertation to the archive.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Research Title</label>
              <input 
                type="text" 
                required
                className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Enter complete title"
              />
            </div>
            
            {/* Author field removed as requested */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Strand / Course</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                    {strands.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                </div>

                <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">Year Published</label>
                <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
                </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="block text-sm font-semibold text-slate-700">Upload Document (PDF)</label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
              <FileText className="mx-auto text-slate-400 group-hover:text-blue-500 mb-4 transition-colors" size={48} />
              <p className="font-medium text-slate-700">Click to upload or drag and drop</p>
              <p className="text-sm text-slate-400 mt-1">PDF only, max 10MB</p>
              <input type="file" className="hidden" accept=".pdf" />
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full bg-[#1178ec] hover:bg-[#0a0da4] text-white font-bold py-4 rounded-xl transition-colors shadow-md"
            >
              Submit Research
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
