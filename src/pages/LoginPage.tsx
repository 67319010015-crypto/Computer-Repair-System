import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Construction, User, Key, Eye, EyeOff, Info, Building2, LogIn } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex-grow flex items-stretch min-h-screen">
      {/* Left Side: Illustration & Info */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="relative z-10 w-full max-w-xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            พร้อมให้บริการจัดการแจ้งซ่อมแบบ Real-time
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold leading-tight mb-6"
          >
            ยกระดับการจัดการ<br/>
            <span className="text-blue-200">งานแจ้งซ่อมคอมพิวเตอร์</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg leading-relaxed mb-12 opacity-90 max-w-md"
          >
            ระบบจัดการแจ้งซ่อมที่ออกแบบมาเพื่อความรวดเร็ว ติดตามสถานะได้ทุกขั้นตอน และรายงานผลลัพธ์ที่แม่นยำสำหรับองค์กรของคุณ
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                <Construction className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold">Dashboard Report</div>
                <div className="text-xs text-blue-200">สถิติการซ่อมประจำเดือนล่าสุด</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-3/4"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-300 w-1/2"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-1/3"></div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 bg-white relative">
        <div className="absolute top-8 left-8 lg:left-24">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-bold text-sm group">
            <Construction size={18} className="group-hover:rotate-12 transition-transform" />
            กลับหน้าแรก
          </Link>
        </div>
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">เข้าสู่ระบบ</h2>
            <p className="text-slate-500 font-medium">กรุณาระบุข้อมูลของคุณเพื่อเข้าใช้งานระบบ</p>
          </div>
          
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">
                ชื่อผู้ใช้งาน (Username)
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  placeholder="อีเมลหรือชื่อผู้ใช้งาน"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-slate-700">
                  รหัสผ่าน (Password)
                </label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">ลืมรหัสผ่าน?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Key className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 focus:ring-blue-600/20 border-slate-300 rounded" />
              <label htmlFor="remember" className="ml-2.5 block text-sm font-medium text-slate-600 select-none">
                จดจำการเข้าสู่ระบบ
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-blue-600 text-white rounded-lg font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              เข้าสู่ระบบ
              <LogIn size={20} />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              หากคุณยังไม่มีบัญชีผู้ใช้งาน 
              <Link to="/register" className="text-blue-600 font-bold hover:underline underline-offset-4 ml-1">ลงทะเบียนที่นี่</Link>
            </p>
          </div>

          <div className="mt-12">
            <div className="relative flex items-center gap-4 mb-8">
              <div className="flex-grow border-t border-slate-100"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2">เข้าใช้งานผ่านระบบอื่น</span>
              <div className="flex-grow border-t border-slate-100"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2.5 py-3 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Google Account
              </button>
              <button className="flex items-center justify-center gap-2.5 py-3 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
                <Building2 size={20} className="text-blue-600" />
                SSO Portal
              </button>
            </div>
          </div>

          <footer className="mt-16 text-center">
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
              © 2024 Computer Repair Management System. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
