import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Ticket, History, BarChart, Package, Settings, Search, Bell, Moon, PlusCircle, MoreVertical, Laptop, Printer, Monitor as MonitorIcon, CheckCircle, Calendar, Download, User } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 border-r border-slate-200 bg-white flex flex-col h-full z-20">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <MonitorIcon size={24} />
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight tracking-tight">ระบบแจ้งซ่อม</h1>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">IT Service Desk</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-2">เมนูหลัก</p>
          <SidebarLink to="/" icon={<MonitorIcon size={20} />} label="หน้าหลักเว็บไซต์" />
          <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="แผงควบคุม" />
          <SidebarLink to="/tickets" icon={<Ticket size={20} />} label="รายการแจ้งซ่อม" />
          <SidebarLink to="/history" icon={<History size={20} />} label="ประวัติการซ่อม" active />
          
          <div className="pt-6 pb-2">
            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-2">รายงาน & การจัดการ</p>
          </div>
          <SidebarLink to="/reports" icon={<BarChart size={20} />} label="รายงานสถิติ" />
          <SidebarLink to="/inventory" icon={<Package size={20} />} label="คลังอุปกรณ์" />
          <SidebarLink to="#" icon={<Settings size={20} />} label="ตั้งค่าระบบ" />
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                alt="User profile" 
                className="size-10 rounded-full object-cover ring-2 ring-white" 
                src="https://picsum.photos/seed/tech1/40/40"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Somsak Repair</p>
                <p className="text-[11px] text-slate-500 truncate">Technician Level 2</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-slate-100 border-transparent focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 rounded-xl transition-all outline-none" 
                placeholder="ค้นหาประวัติการซ่อม..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-all">
              <Download size={18} />
              ส่งออกรายงาน
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">ประวัติการดำเนินงาน</h2>
                <p className="text-slate-500 font-medium">ตรวจสอบรายการที่ดำเนินการเสร็จสิ้นแล้วทั้งหมด</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <HistoryItem 
                id="#TK-8755" 
                title="Dell Precision Workstation" 
                issue="เปิดไม่ติด" 
                solution="เปลี่ยน Power Supply Unit (PSU) ใหม่ และทำความสะอาดภายใน" 
                date="22 ต.ค. 2023" 
                technician="สมศักดิ์ รักงาน" 
                icon={<MonitorIcon size={24} />}
              />
              <HistoryItem 
                id="#TK-8732" 
                title="Logitech G502 Mouse" 
                issue="คลิกซ้ายไม่ติด" 
                solution="เปลี่ยนสวิตช์ Omron 20M ตัวใหม่" 
                date="20 ต.ค. 2023" 
                technician="วิชัย ช่างไฟ" 
                icon={<Settings size={24} />}
              />
              <HistoryItem 
                id="#TK-8699" 
                title="Brother MFC-L2700D" 
                issue="กระดาษติดบ่อย" 
                solution="เปลี่ยนชุดลูกยางดึงกระดาษ (Pickup Roller)" 
                date="18 ต.ค. 2023" 
                technician="สมศักดิ์ รักงาน" 
                icon={<Printer size={24} />}
              />
              <HistoryItem 
                id="#TK-8650" 
                title="Asus ROG Zephyrus" 
                issue="เครื่องร้อนจัดและดับเอง" 
                solution="ทำความสะอาดพัดลมและทาซิลิโคนระบายความร้อนใหม่ (Repaste)" 
                date="15 ต.ค. 2023" 
                technician="มานะ มีใจ" 
                icon={<Laptop size={24} />}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ to, icon, label, active = false }: { to: string; icon: ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
          : 'hover:bg-slate-100 text-slate-600'
      }`}
    >
      {icon}
      <span className={`text-sm ${active ? 'font-semibold' : 'font-medium'}`}>{label}</span>
    </Link>
  );
}

function HistoryItem({ id, title, issue, solution, date, technician, icon }: { id: string; title: string; issue: string; solution: string; date: string; technician: string; icon: ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:border-blue-600/30 hover:shadow-lg transition-all group">
      <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all shrink-0">
        {icon}
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">{id}</span>
            <h4 className="text-lg font-bold text-slate-900">{title}</h4>
          </div>
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-emerald-100">
            <CheckCircle size={14} />
            Completed
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">อาการที่แจ้ง</p>
            <p className="text-sm text-slate-600 font-medium">{issue}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">การแก้ไข</p>
            <p className="text-sm text-slate-700 font-bold">{solution}</p>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {date}</span>
            <span className="flex items-center gap-1.5"><User size={14} /> ช่างผู้ดูแล: {technician}</span>
          </div>
          <button className="text-blue-600 font-bold hover:underline underline-offset-4">ดูรายละเอียดใบเสร็จ</button>
        </div>
      </div>
    </div>
  );
}
