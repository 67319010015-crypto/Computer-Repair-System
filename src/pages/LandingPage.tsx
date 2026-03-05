import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Search, CheckCircle, Cpu, SquareTerminal, RefreshCw, ClipboardList, Truck, Settings, ShieldCheck, Globe, Mail, Phone, MapPin, UserCheck, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export default function LandingPage() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                ศูนย์บริการซ่อมคอมพิวเตอร์ครบวงจร
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.15]">
                ระบบแจ้งซ่อมอุปกรณ์ <br/>
                <span className="text-blue-600 italic">คอมพิวเตอร์</span> ทันสมัย
              </h2>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                รวดเร็ว โปร่งใส ตรวจสอบสถานะได้แบบเรียลไทม์ พร้อมช่างเทคนิคผู้เชี่ยวชาญคอยดูแลอุปกรณ์ของคุณตลอด 24 ชั่วโมง
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/request" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/25 flex items-center gap-3 transition-all hover:-translate-y-1">
                  <PlusCircle size={24} />
                  แจ้งซ่อมทันที
                </Link>
                <Link to="/dashboard" className="bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all">
                  <Search size={24} className="text-slate-400" />
                  ติดตามสถานะ
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">ผู้ใช้งานกว่า <span className="font-bold text-slate-900">2,500+</span> ท่าน ไว้วางใจระบบของเรา</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100 border-8 border-white">
                  <img 
                    alt="Computer Repair" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Success Rate</p>
                    <p className="text-xl font-black text-slate-900">99.8%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Our Expertise</span>
            <h3 className="text-3xl font-bold text-slate-900">บริการที่เราเชี่ยวชาญ</h3>
            <p className="text-slate-500">เรามีทีมงานคุณภาพที่พร้อมดูแลปัญหาคอมพิวเตอร์ของคุณในทุกรูปแบบ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard 
              icon={<Cpu size={32} />} 
              title="ซ่อมแซมฮาร์ดแวร์" 
              description="ตรวจเช็คและเปลี่ยนอะไหล่ที่ชำรุด เช่น เมนบอร์ด, หน้าจอ, แบตเตอรี่ และอุปกรณ์เชื่อมต่อต่างๆ" 
            />
            <ExpertiseCard 
              icon={<SquareTerminal size={32} />} 
              title="แก้ไขซอฟต์แวร์" 
              description="ติดตั้งระบบปฏิบัติการ, โปรแกรมใช้งาน, ล้างไวรัส และกู้คืนข้อมูลสำคัญที่สูญหาย" 
            />
            <ExpertiseCard 
              icon={<RefreshCw size={32} />} 
              title="ดูแลระบบและเน็ตเวิร์ก" 
              description="วางระบบเครือข่ายภายในองค์กร, ติดตั้ง WiFi และบริการสำรองข้อมูลบน Cloud" 
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">ขั้นตอนการรับบริการ</h3>
            <p className="text-slate-500">ง่ายๆ เพียง 4 ขั้นตอน ในการกู้คืนประสิทธิภาพคอมพิวเตอร์ของคุณ</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              <StepItem number={1} icon={<ClipboardList size={32} />} title="แจ้งรายละเอียด" description="ระบุอาการเสียและข้อมูลผ่านระบบ" />
              <StepItem number={2} icon={<Truck size={32} />} title="ส่งมอบเครื่อง" description="นำมาส่งที่ศูนย์หรือเรียกบริการรับเครื่อง" />
              <StepItem number={3} icon={<Settings size={32} />} title="ดำเนินการซ่อม" description="ช่างประเมินและแจ้งราคาพร้อมซ่อม" />
              <StepItem number={4} icon={<ShieldCheck size={32} />} title="รับเครื่องคืน" description="ตรวจสอบงานและรับการรับประกัน" isLast />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">พบปัญหาคอมพิวเตอร์ <br/>ให้เราช่วยดูแลวันนี้</h3>
              <p className="text-slate-400 text-lg">ประหยัดเวลาด้วยระบบแจ้งซ่อมออนไลน์ เช็คราคาเบื้องต้นได้ทันที และรับประกันงานซ่อมสูงสุด 90 วัน</p>
              <div className="pt-4">
                <Link to="/request" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all inline-block">
                  เปิดตั๋วแจ้งซ่อม (Open Ticket)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                  <Monitor size={20} />
                </div>
                <span className="text-lg font-bold text-slate-900 uppercase">CRS System</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                ระบบบริหารจัดการงานซ่อมคอมพิวเตอร์ประสิทธิภาพสูง เพื่อการบริการที่รวดเร็วและเป็นมืออาชีพที่สุดสำหรับองค์กรและบุคคลทั่วไป
              </p>
              <div className="flex gap-3">
                <SocialIcon icon={<Globe size={18} />} />
                <SocialIcon icon={<Mail size={18} />} />
                <SocialIcon icon={<Phone size={18} />} />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">เมนูแนะนำ</h4>
              <ul className="space-y-4">
                <FooterLink label="แจ้งซ่อมใหม่" to="/request" />
                <FooterLink label="ตรวจสอบสถานะ" to="/dashboard" />
                <FooterLink label="เกี่ยวกับเรา" to="/about" />
                <FooterLink label="ติดต่อเรา" to="/contact" />
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">เกี่ยวกับระบบ</h4>
              <ul className="space-y-4">
                <FooterLink label="อัตราค่าบริการ" />
                <FooterLink label="นโยบายความเป็นส่วนตัว" />
                <FooterLink label="เงื่อนไขการรับประกัน" />
                <FooterLink label="ร่วมงานกับเรา" />
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">การติดต่อ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-600 mt-0.5" />
                  <span className="text-sm text-slate-500 leading-relaxed">
                    123 อาคารศูนย์เทคโนโลยี ถนนวิทยุ <br/>ปทุมวัน กรุงเทพฯ 10330
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <UserCheck size={18} className="text-blue-600" />
                  <span className="text-sm text-slate-500">02-123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2024 Computer Repair Management System. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Secure Platform</span>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Verified Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-600 transition-all hover:shadow-md group">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StepItem({ number, icon, title, description, isLast = false }: { number: number; icon: ReactNode; title: string; description: string; isLast?: boolean }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${isLast ? 'bg-blue-600 text-white shadow-blue-600/30' : 'bg-white border-2 border-blue-600 text-blue-600 shadow-blue-600/10'}`}>
        {icon}
      </div>
      <h5 className="text-lg font-bold text-slate-900 mb-2">{number}. {title}</h5>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
      {icon}
    </a>
  );
}

function FooterLink({ label, to = "#" }: { label: string; to?: string }) {
  return (
    <li>
      <Link to={to} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">{label}</Link>
    </li>
  );
}
