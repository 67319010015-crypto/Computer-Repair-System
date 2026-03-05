import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ChevronRight, CheckCircle, X, Send, Headset, ImagePlus, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RepairRequestPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex-grow flex flex-col min-h-screen bg-slate-50">
      <header className="h-16 flex items-center justify-between border-b border-slate-200 bg-white px-6 md:px-10 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="size-9 flex items-center justify-center bg-blue-600 rounded-xl text-white shadow-sm shadow-blue-600/20">
            <Monitor size={20} />
          </div>
          <h2 className="text-lg font-extrabold leading-tight tracking-tight hidden sm:block">ระบบแจ้งซ่อมไอที</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-500 hover:text-blue-600 text-sm font-semibold transition-colors">หน้าแรก</Link>
          <Link to="/request" className="text-blue-600 text-sm font-bold border-b-2 border-blue-600 py-5">แจ้งซ่อม</Link>
          <Link to="/dashboard" className="text-slate-500 hover:text-blue-600 text-sm font-semibold transition-colors">รายการของฉัน</Link>
          <Link to="/dashboard" className="text-slate-500 hover:text-blue-600 text-sm font-semibold transition-colors">แดชบอร์ด</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-slate-100" style={{ backgroundImage: 'url("https://picsum.photos/seed/tech1/40/40")' }}></div>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-8 md:py-12 px-4">
        <div className="w-full max-w-[900px] flex flex-col gap-8">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200"
              >
                <div className="size-10 flex items-center justify-center rounded-xl bg-emerald-500 text-white shrink-0 shadow-sm">
                  <CheckCircle size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-emerald-900 font-bold text-base">แจ้งซ่อมสำเร็จ!</h3>
                  <p className="text-emerald-700 text-sm">หมายเลขตั๋วของคุณคือ <span className="font-mono font-bold">#TK-8842</span> เราจะติดต่อกลับโดยเร็วที่สุด</p>
                </div>
                <button onClick={() => setIsSubmitted(false)} className="text-emerald-400 hover:text-emerald-600 transition-colors">
                  <X size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-blue-600 transition-colors">หน้าหลัก</Link>
              <ChevronRight size={14} />
              <span className="text-blue-600">แจ้งซ่อมใหม่</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 mt-1">สร้างรายการแจ้งซ่อมใหม่</h1>
            <p className="text-slate-500">กรุณาระบุรายละเอียดให้ครบถ้วนเพื่อความรวดเร็วในการประสานงาน</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-10 flex flex-col gap-10">
              {/* Stepper */}
              <div className="flex items-center justify-between max-w-xl mx-auto w-full">
                <StepIndicator number={1} label="อุปกรณ์" active={step >= 1} />
                <div className={`h-0.5 flex-1 mx-2 -mt-7 ${step >= 2 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                <StepIndicator number={2} label="ระบุปัญหา" active={step >= 2} />
                <div className={`h-0.5 flex-1 mx-2 -mt-7 ${step >= 3 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                <StepIndicator number={3} label="ยืนยัน" active={step >= 3} />
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">ประเภทอุปกรณ์ <span className="text-rose-500">*</span></label>
                  <div className="relative">
                    <select className="w-full h-12 rounded-xl border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all appearance-none outline-none">
                      <option disabled selected value="">ระบุประเภทอุปกรณ์</option>
                      <option value="laptop">Laptop / โน้ตบุ๊ก</option>
                      <option value="desktop">Desktop / คอมพิวเตอร์ตั้งโต๊ะ</option>
                      <option value="monitor">Monitor / จอภาพ</option>
                      <option value="printer">Printer / เครื่องพิมพ์</option>
                      <option value="other">อื่น ๆ</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={20} />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">หมายเลขซีเรียล <span className="text-rose-500">*</span></label>
                  <input 
                    className="w-full h-12 rounded-xl border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" 
                    placeholder="S/N หรือ Service Tag" 
                    type="text"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">รายละเอียดปัญหาที่พบ <span className="text-rose-500">*</span></label>
                  <textarea 
                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all outline-none resize-none" 
                    placeholder="เช่น เครื่องเปิดไม่ติด, จอภาพเป็นเส้น, ต่อ WiFi ไม่ได้..." 
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">รูปภาพประกอบ</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 bg-slate-50/30 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer group">
                    <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-all group-hover:scale-110">
                      <ImagePlus size={32} />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-slate-900">อัปโหลดรูปภาพ</p>
                      <p className="text-xs text-slate-500 mt-1">ลากไฟล์มาวาง หรือ คลิกเพื่อเลือกไฟล์ (Max 5MB)</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 md:col-span-2">
                  <button 
                    type="submit"
                    className="flex-1 sm:flex-none h-14 px-12 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-3 active:scale-95"
                  >
                    ส่งข้อมูลแจ้งซ่อม
                    <Send size={20} />
                  </button>
                  <Link to="/dashboard" className="flex-1 sm:flex-none h-14 px-12 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center active:scale-95">
                    ยกเลิก
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
            <div className="flex items-center gap-5">
              <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm ring-1 ring-slate-200">
                <Headset size={32} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">ต้องการความช่วยเหลือด่วน?</h4>
                <p className="text-sm text-slate-500">ติดต่อฝ่ายไอทีสายด่วน โทร 02-xxx-xxxx หรือ แชทผ่านระบบภายใน</p>
              </div>
            </div>
            <button className="w-full md:w-auto h-11 px-8 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:shadow-md transition-all active:scale-95">
              คุยกับเจ้าหน้าที่
            </button>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-slate-100 rounded-lg text-slate-500">
              <Monitor size={18} />
            </div>
            <span className="font-bold text-slate-500">IT Support System</span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            © 2024 ระบบจัดการงานซ่อมบำรุงคอมพิวเตอร์ - ฝ่ายสนับสนุนเทคโนโลยีสารสนเทศ
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase tracking-tight">นโยบายการใช้งาน</a>
            <a href="#" className="text-xs text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase tracking-tight">คู่มือการใช้งาน</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StepIndicator({ number, label, active }: { number: number; label: string; active: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`size-10 rounded-full flex items-center justify-center font-bold border-2 shadow-sm transition-all ${
        active ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-400 border-slate-200'
      }`}>
        {number}
      </div>
      <span className={`text-[11px] font-bold uppercase tracking-tighter ${active ? 'text-blue-600' : 'text-slate-400'}`}>
        {label}
      </span>
    </div>
  );
}
