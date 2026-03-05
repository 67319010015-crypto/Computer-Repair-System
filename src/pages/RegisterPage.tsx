import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Construction, User, Key, Eye, EyeOff, Mail, UserPlus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    alert('ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ');
    navigate('/login');
  };

  return (
    <div className="flex-grow flex items-stretch min-h-screen">
      {/* Left Side: Illustration & Info */}
      <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-indigo-600 to-indigo-800 items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="relative z-10 w-full max-w-xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
          >
            <UserPlus size={16} />
            เข้าร่วมกับเราวันนี้
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold leading-tight mb-6"
          >
            เริ่มต้นจัดการ<br/>
            <span className="text-indigo-200">งานซ่อมอย่างมืออาชีพ</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-100 text-lg leading-relaxed mb-12 opacity-90 max-w-md"
          >
            สร้างบัญชีผู้ใช้งานเพื่อเริ่มต้นแจ้งซ่อม ติดตามสถานะ และรับการแจ้งเตือนแบบทันท่วงที
          </motion.p>
          
          <div className="grid grid-cols-2 gap-6">
            <FeatureItem title="แจ้งซ่อมง่าย" desc="เพียงไม่กี่คลิก" />
            <FeatureItem title="ติดตามสถานะ" desc="Real-time 24/7" />
            <FeatureItem title="ประวัติการซ่อม" desc="เก็บข้อมูลครบถ้วน" />
            <FeatureItem title="แจ้งเตือน" desc="ผ่านระบบและอีเมล" />
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Register Form */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 bg-white relative">
        <div className="absolute top-8 left-8 lg:left-24">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-colors font-bold text-sm group">
            <Construction size={18} className="group-hover:rotate-12 transition-transform" />
            กลับหน้าแรก
          </Link>
        </div>
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">สร้างบัญชีใหม่</h2>
            <p className="text-slate-500 font-medium">กรอกข้อมูลด้านล่างเพื่อลงทะเบียนเข้าใช้งาน</p>
          </div>
          
          <form className="space-y-5" onSubmit={handleRegister}>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">ชื่อ-นามสกุล</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  placeholder="ระบุชื่อและนามสกุลของคุณ"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">อีเมล (Email)</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all outline-none text-slate-900 placeholder:text-slate-400" 
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">รหัสผ่าน (Password)</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Key className="text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all outline-none text-slate-900 placeholder:text-slate-400" 
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

            <div className="flex items-start">
              <input type="checkbox" id="terms" required className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-600/20 border-slate-300 rounded" />
              <label htmlFor="terms" className="ml-2.5 block text-xs text-slate-600 leading-relaxed">
                ฉันยอมรับ <a href="#" className="text-indigo-600 font-bold hover:underline">เงื่อนไขการใช้งาน</a> และ <a href="#" className="text-indigo-600 font-bold hover:underline">นโยบายความเป็นส่วนตัว</a>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-indigo-600 text-white rounded-lg font-bold text-base hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.99] flex items-center justify-center gap-2"
            >
              ลงทะเบียน
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              มีบัญชีผู้ใช้งานอยู่แล้ว? 
              <Link to="/login" className="text-indigo-600 font-bold hover:underline underline-offset-4 ml-1">เข้าสู่ระบบที่นี่</Link>
            </p>
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

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
      <div className="text-sm font-bold mb-1">{title}</div>
      <div className="text-[10px] text-indigo-200 uppercase tracking-wider">{desc}</div>
    </div>
  );
}
