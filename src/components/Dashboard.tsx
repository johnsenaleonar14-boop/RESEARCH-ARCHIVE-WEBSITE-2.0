import React, { useState } from 'react';
import { Search, Star, Filter } from 'lucide-react';
import { MOCK_DATA } from '../data';

interface DashboardProps {
  savedItems: Set<string>;
  toggleSave: (id: string) => void;
}

export function Dashboard({ savedItems, toggleSave }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStrand, setFilterStrand] = useState('');
  const [filterYear, setFilterYear] = useState('');

  const filteredData = MOCK_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.strand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType ? item.type === filterType : true;
    const matchesStrand = filterStrand ? item.strand === filterStrand : true; // Exact match for strand usually better with dropdowns
    const matchesYear = filterYear && filterYear !== 'All Year' ? item.year.toString() === filterYear : true;

    return matchesSearch && matchesType && matchesStrand && matchesYear;
  });

  const strands = [
    "STEM", "HUMMS", "ABM", "TVL-ICT", "TVL-ICT ( HARDWARE )", "TVL-HE", "GAS", "ARTS AND DESIGN"
  ];

  return (
    <div className="flex flex-col gap-6 pb-12">
      {/* Header Bar */}
      <div className="bg-[#0a0da4] text-white p-4 rounded-xl shadow-md flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold pl-4">Research Archive</h1>
        {/* Logout removed as requested */}
      </div>

      {/* Hero Search Section */}
      <div className="bg-[#1178ec] rounded-[20px] p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
        {/* Decorative circle/shape could go here */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">Explore the Research Archive</h2>
        <p className="text-blue-100 text-lg mb-8 font-medium">Search, browse, and upload academic theses.</p>
        
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 relative z-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search by title, keyword..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 shadow-sm bg-white" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-[#0a0da4] hover:bg-[#1a51de] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md border border-white/20">
            Search
          </button>
        </div>
      </div>

      {/* Filters & Results Section */}
      <div className="bg-white rounded-[20px] p-8 shadow-sm border border-slate-100 min-h-[500px]">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Search & Results</h3>
        
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
             <select 
               className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
               value={filterType}
               onChange={(e) => setFilterType(e.target.value)}
             >
               <option value="">Research Type</option>
               <option value="Qualitative">Qualitative</option>
               <option value="Quantitative">Quantitative</option>
             </select>
             <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
          
          <div className="relative">
             <select 
               className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
               value={filterStrand}
               onChange={(e) => setFilterStrand(e.target.value)}
             >
               <option value="">Strand & Course</option>
               {strands.map(s => <option key={s} value={s}>{s}</option>)}
             </select>
             <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>

          <div className="relative">
             <select 
               className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
               value={filterYear}
               onChange={(e) => setFilterYear(e.target.value)}
             >
               <option value="">Year</option>
               <option value="All Year">All Year</option>
               <option value="2026">2026</option>
               <option value="2025">2025</option>
               <option value="2024">2024</option>
               <option value="2023">2023</option>
             </select>
             <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Results Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b-2 border-slate-100 text-slate-500 font-bold text-sm uppercase tracking-wider mb-2">
          <div className="col-span-8 md:col-span-7">Title</div>
          <div className="col-span-3 md:col-span-3 text-right md:text-left">Strand / Course</div>
          <div className="col-span-1 md:col-span-1 text-right">Year</div>
          <div className="col-span-1 md:col-span-1 text-center"></div>
        </div>

        {/* Results List */}
        <div className="flex flex-col gap-2">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 px-4 py-6 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 items-center group">
                <div className="col-span-8 md:col-span-7">
                  <h4 className="font-semibold text-slate-800 text-lg leading-snug">{item.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{item.type} • {item.author}</p>
                </div>
                <div className="col-span-3 md:col-span-3 text-right md:text-left text-slate-600 font-medium text-sm md:text-base">
                  {item.strand}
                </div>
                <div className="col-span-1 md:col-span-1 text-right text-slate-600 font-medium">
                  {item.year}
                </div>
                <div className="col-span-1 md:col-span-1 flex justify-center">
                  <button 
                    onClick={() => toggleSave(item.id)}
                    className="p-2 rounded-full hover:bg-slate-200 transition-colors focus:outline-none"
                  >
                    <Star 
                      size={20} 
                      className={`${savedItems.has(item.id) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 group-hover:text-slate-400'}`} 
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400">
              No results found matching your criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
