import React from 'react';
import { Info, CheckCircle, AlertCircle } from 'lucide-react';

export function Guidelines() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
            <Info size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Submission Guidelines</h2>
            <p className="text-slate-500">Rules and requirements for uploading research papers.</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              Requirements
            </h3>
            <ul className="space-y-3 pl-2 text-slate-600">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                <p>All uploads must be in <strong>PDF format</strong>.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                <p>File size must not exceed <strong>10MB</strong>.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                <p>Ensure the title matches the final approved thesis title exactly.</p>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                <p>Include all group members/authors in the correct order.</p>
              </li>
            </ul>
          </section>

          <div className="h-px bg-slate-100" />

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertCircle className="text-orange-500" size={20} />
              Important Notes
            </h3>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-orange-800 text-sm leading-relaxed">
              <p className="mb-4">
                By uploading your research to the ACT Research Archive, you grant the institution permission to store and display your work for academic and reference purposes. You retain the copyright to your work.
              </p>
              <p>
                Please ensure that your document does not contain sensitive personal information (PII) beyond the authors' names.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Formatting Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Title Page included",
                "Approval Sheet signed",
                "Abstract included",
                "Table of Contents",
                "References in APA format"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="w-5 h-5 rounded border-2 border-slate-300"></div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
