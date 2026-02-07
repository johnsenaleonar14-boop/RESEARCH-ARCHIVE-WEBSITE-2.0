import React, { useState } from 'react';
import imgActC2Bldg21 from "figma:asset/05c0d53ee3b3cbd3e2fee0c275c3285a35bd3e12.png";
import imgLogo from "figma:asset/a0ff3d8a04b9be57b4eee1a277455a736dc40a02.png"; // ChatGptImage...
import imgStudent from "figma:asset/bdf0d502d141ae38d33d1d32039d74c4af88d4a3.png";
import imgTeacher from "figma:asset/229d130031416a090b839624b0a10be891bfab62.png";
import imgAdmin from "figma:asset/a38984c738bf9a469cb8fd46c28cff73244b5a98.png";

interface RegisterProps {
  onRegister: (role: string, name: string) => void;
  onNavigateToLogin: () => void;
}

export function Register({ onRegister, onNavigateToLogin }: RegisterProps) {
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin' | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }
    onRegister(selectedRole, formData.fullName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto flex items-center justify-center font-['Inter']">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60 pointer-events-none top-[-100px]">
        <img src={imgActC2Bldg21} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 flex shadow-2xl rounded-[15px] overflow-hidden shrink-0" style={{ width: '1024px', height: '600px' }}>
        
        {/* Left Side (Blue) */}
        <div className="relative bg-[#1178ec] border-r border-[#1e1c1c] text-white shrink-0" style={{ width: '469px' }}>
           {/* Logo Image - positioned like in Figma if present, but looking at code it seems logo is used in Desktop 3 as well */}
           {/* Wait, Desktop3 has imgChatGptImage... at left[586] which is on the WHITE side. 
               The left side has "Select Your Role" and role cards. */}
           
           <h2 className="absolute left-[32px] top-[36px] font-bold text-[24px]">Select Your Role</h2>

           {/* Role Cards */}
           <div 
             onClick={() => setSelectedRole('student')}
             className={`absolute left-[36px] top-[102px] w-[400px] h-[89px] rounded-[10px] border cursor-pointer transition-all flex items-center px-4 gap-4 ${selectedRole === 'student' ? 'bg-[#005bb5] border-white shadow-lg scale-[1.02]' : 'bg-[#0278ff] border-[#969393] hover:bg-[#0266da]'}`}
           >
              <div className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center">
                <img src={imgStudent} alt="Student" className="w-[50px] h-[50px] object-contain" />
              </div>
              <div>
                <p className="font-semibold text-[16px]">Student</p>
                <p className="text-[13px] opacity-80">Access and view only</p>
              </div>
           </div>

           <div 
             onClick={() => setSelectedRole('teacher')}
             className={`absolute left-[36px] top-[210px] w-[400px] h-[89px] rounded-[10px] border cursor-pointer transition-all flex items-center px-4 gap-4 ${selectedRole === 'teacher' ? 'bg-[#005bb5] border-white shadow-lg scale-[1.02]' : 'bg-[#0278ff] border-[#969393] hover:bg-[#0266da]'}`}
           >
              <div className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center">
                <img src={imgTeacher} alt="Teacher" className="w-[50px] h-[50px] object-contain" />
              </div>
              <div>
                <p className="font-semibold text-[16px]">Teacher</p>
                <p className="text-[13px] opacity-80">Access, upload and manage research</p>
              </div>
           </div>

           <div 
             onClick={() => setSelectedRole('admin')}
             className={`absolute left-[36px] top-[321px] w-[400px] h-[89px] rounded-[10px] border cursor-pointer transition-all flex items-center px-4 gap-4 ${selectedRole === 'admin' ? 'bg-[#005bb5] border-white shadow-lg scale-[1.02]' : 'bg-[#0278ff] border-[#969393] hover:bg-[#0266da]'}`}
           >
              <div className="w-[74px] h-[74px] flex-shrink-0 flex items-center justify-center">
                <img src={imgAdmin} alt="Admin" className="w-[50px] h-[50px] object-contain" />
              </div>
              <div>
                <p className="font-semibold text-[16px]">Administrator</p>
                <p className="text-[13px] opacity-80">Full system access and management</p>
              </div>
           </div>

           {/* Footer Text */}
           <div className="absolute left-[36px] top-[451px] flex items-start gap-3">
             <span className="text-[#fff700] text-[16px] leading-[30px]">●</span>
             <p className="text-[14px] leading-[20px]">
               Choose the role that best describes you. This will <br/>
               customize your experience in the ACT Research Archive.
             </p>
           </div>
        </div>

        {/* Right Side (White) */}
        <div className="relative bg-white border-l border-black shrink-0" style={{ width: '555px' }}>
           
           <h2 className="absolute left-[37px] top-[35px] font-medium text-[24px] opacity-90 text-black">Account Information</h2>

           <form onSubmit={handleSubmit}>
             {/* Full Name */}
             <div className="absolute left-[37px] top-[107px]">
               <label className="block text-[14px] font-medium opacity-80 text-black mb-1">Full Name</label>
               <input 
                 type="text"
                 name="fullName"
                 value={formData.fullName}
                 onChange={handleChange}
                 className="w-[476px] h-[40px] px-3 border border-[#969393] rounded-[10px] bg-white outline-none focus:border-[#1178ec]"
                 placeholder="Enter your full name"
               />
             </div>

             {/* Email */}
             <div className="absolute left-[37px] top-[186px]">
               <label className="block text-[14px] font-medium opacity-80 text-black mb-1">Email Address</label>
               <input 
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 className="w-[476px] h-[40px] px-3 border border-[#969393] rounded-[10px] bg-white outline-none focus:border-[#1178ec]"
                 placeholder="your.email@example.com"
               />
             </div>

             {/* Student ID */}
             <div className="absolute left-[37px] top-[260px]">
               <label className="block text-[14px] font-medium opacity-80 text-black mb-1">
                 {selectedRole === 'teacher' ? 'Teacher ID' : selectedRole === 'admin' ? 'Admin ID' : 'Student ID'}
               </label>
               <input 
                 type="text"
                 name="studentId"
                 value={formData.studentId}
                 onChange={handleChange}
                 className="w-[476px] h-[40px] px-3 border border-[#969393] rounded-[10px] bg-white outline-none focus:border-[#1178ec]"
                 placeholder={`Enter your ${selectedRole === 'teacher' ? 'teacher' : selectedRole === 'admin' ? 'admin' : 'student'} ID`}
               />
             </div>

             {/* Password */}
             <div className="absolute left-[37px] top-[336px]">
               <label className="block text-[14px] font-medium opacity-80 text-black mb-1">Password</label>
               <input 
                 type="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-[476px] h-[40px] px-3 border border-[#969393] rounded-[10px] bg-white outline-none focus:border-[#1178ec]"
                 placeholder="Create a strong password"
               />
             </div>

             {/* Confirm Password */}
             <div className="absolute left-[37px] top-[413px]">
               <label className="block text-[14px] font-medium opacity-80 text-black mb-1">Confirm Password</label>
               <input 
                 type="password"
                 name="confirmPassword"
                 value={formData.confirmPassword}
                 onChange={handleChange}
                 className="w-[476px] h-[40px] px-3 border border-[#969393] rounded-[10px] bg-white outline-none focus:border-[#1178ec]"
                 placeholder="Re-enter your password"
               />
             </div>

             {/* Create Account Button */}
             <button 
               type="submit"
               className="absolute left-[37px] top-[482px] w-[476px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#0d79a7] to-[#09b5ff] text-white text-[20px] font-semibold hover:opacity-90 transition-opacity"
             >
               Create Account
             </button>

             {/* Footer */}
             <div className="absolute left-[37px] top-[561px] w-[476px] flex justify-center items-center gap-1 text-[15px]">
               <span className="opacity-70 text-black">Already have an account?</span>
               <button type="button" onClick={onNavigateToLogin} className="text-[#1a51de]">
                 Log In
               </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
}
