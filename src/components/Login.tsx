import React, { useState } from 'react';
import imgActC2Bldg1 from "figma:asset/9939ebb57c5b2bdc710ad3722385c47ac0257145.png";
import imgRectangle from "figma:asset/f1c15e7a817841c6dc4599e6e498046107d905d4.png";
import imgLogo from "figma:asset/a0ff3d8a04b9be57b4eee1a277455a736dc40a02.png"; // ChatGptImage...

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export function Login({ onLogin, onNavigateToRegister }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="relative w-full min-h-screen bg-[#fbfeff] overflow-auto flex items-center justify-center font-['Inter']">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <img src={imgActC2Bldg1} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 flex shadow-2xl rounded-[10px] overflow-hidden shrink-0" style={{ width: '943px', height: '599px' }}>
        
        {/* Left Side (Blue) */}
        <div className="relative bg-[#1178ec] border-r border-[#1e1c1c] text-white shrink-0" style={{ width: '371px' }}>
           {/* Logo Image */}
           <div className="absolute left-[33px] top-[15px] w-[297px] h-[297px]">
             <img src={imgLogo} alt="Logo" className="w-full h-full object-contain" />
           </div>

           {/* Italic Text */}
           <p className="absolute left-0 right-0 top-[311px] text-center italic text-[16px] leading-[30px] font-['Inter:Italic']">
             Access your research archive and <br/>
             collaborate with the academic <br/>
             community.
           </p>

           {/* Bullet Points */}
           <div className="absolute left-[40px] top-[448px] space-y-2">
             <div className="flex items-center gap-3">
               <span className="text-[#fff700] text-[16px]">●</span>
               <span className="text-[16px]">Browse academic theses</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="text-[#fff700] text-[16px]">●</span>
               <span className="text-[16px]">Upload your research</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="text-[#fff700] text-[16px]">●</span>
               <span className="text-[16px]">Collaborate with peers</span>
             </div>
           </div>
        </div>

        {/* Right Side (White) */}
        <div className="relative bg-[#fffafa] border-l border-black shrink-0" style={{ width: '572px' }}>
           {/* Rectangle Image (Header/Logo area?) */}
           <div className="absolute left-[157px] top-[-31px] w-[257px] h-[257px]">
             <img src={imgRectangle} alt="" className="w-full h-full object-contain" />
           </div>

           <form onSubmit={handleSubmit}>
             {/* Username Input */}
             <div className="absolute left-[48px] top-[226px]">
               <div className="relative">
                 <input 
                   type="text"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   className="w-[476px] h-[52px] pl-[45px] pr-4 bg-white border border-[#969393] rounded-[10px] text-[16px] outline-none focus:border-[#1178ec]"
                   placeholder="Username"
                 />
                 <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[16px] opacity-50">👤</span>
               </div>
             </div>

             {/* Password Input */}
             <div className="absolute left-[48px] top-[312px]">
                <div className="relative">
                 <input 
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-[476px] h-[52px] pl-[45px] pr-4 bg-[#fffbfb] border border-[#969393] rounded-[10px] text-[16px] outline-none focus:border-[#1178ec]"
                   placeholder="Password"
                 />
                 <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[16px] opacity-50">🔒</span>
               </div>
             </div>

             {/* Remember Me & Forgot Password */}
             <div className="absolute left-[48px] top-[390px] w-[476px] flex justify-between items-center">
               <div 
                 className="flex items-center gap-2 cursor-pointer"
                 onClick={() => setRememberMe(!rememberMe)}
               >
                 <div className={`w-[19px] h-[19px] rounded-[3px] border flex items-center justify-center ${rememberMe ? 'bg-[#1178ec] border-[#1178ec]' : 'bg-[#575454] border-[#575454]'}`}>
                    {rememberMe && <span className="text-white text-xs">✓</span>}
                 </div>
                 <span className="text-[14px] font-medium opacity-80">Remember me</span>
               </div>
               
               <button type="button" className="text-[#00b2ff] text-[14px] font-medium">
                 Forgot Password?
               </button>
             </div>

             {/* Login Button */}
             <button 
               type="submit"
               className="absolute left-[48px] top-[448px] w-[476px] h-[52px] rounded-[10px] bg-gradient-to-r from-[#0d79a7] to-[#09b5ff] text-white text-[20px] font-semibold hover:opacity-90 transition-opacity"
             >
               Log in
             </button>

             {/* Divider */}
             <div className="absolute left-[48px] top-[520px] w-[476px] flex items-center justify-center relative">
               <div className="w-full border-t border-black opacity-20 absolute top-1/2"></div>
               <span className="bg-[#fffafa] px-2 relative z-10 text-[13px] opacity-60">or</span>
             </div>

             {/* Create Account */}
             <div className="absolute left-[48px] top-[557px] w-[476px] flex justify-center items-center gap-1 text-[15px]">
               <span className="opacity-70">Don’t have an account?</span>
               <button type="button" onClick={onNavigateToRegister} className="text-[#1a51de]">
                 Create Account
               </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
}
