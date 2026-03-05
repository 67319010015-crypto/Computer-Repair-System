import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Ticket, History, BarChart, Package, Settings, Search, Bell, Moon, PlusCircle, MoreVertical, Laptop, Printer, Monitor as MonitorIcon, TrendingUp, TrendingDown, Minus, ClipboardList, CheckCircle, User } from 'lucide-react';

export default function DashboardPage() {
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
          <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="แผงควบคุม" active />
          <SidebarLink to="/tickets" icon={<Ticket size={20} />} label="รายการแจ้งซ่อม" />
          <SidebarLink to="/history" icon={<History size={20} />} label="ประวัติการซ่อม" />
          
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
                placeholder="ค้นหาเลขอ้างอิง, อุปกรณ์ หรือชื่อผู้แจ้ง..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
              <button className="size-9 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-slate-500 transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-slate-100"></span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm text-slate-500 transition-all">
                <Moon size={20} />
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200 mx-1"></div>
            <Link to="/request" className="h-11 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all transform active:scale-[0.98]">
              <PlusCircle size={20} />
              แจ้งซ่อมใหม่
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto p-8 space-y-8">
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">ระบบแจ้งซ่อมอุปกรณ์คอมพิวเตอร์</h2>
                <p className="text-slate-500 font-medium">ยินดีต้อนรับกลับมา, วันนี้มีรายการรอตรวจสอบ 12 รายการ</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200">
                <History size={18} />
                <span>24 ตุลาคม 2566</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                label="รอดำเนินการ" 
                value="12" 
                trend="+2 จากเมื่อวาน" 
                trendType="up" 
                icon={<History size={32} />} 
                color="orange" 
              />
              <StatCard 
                label="กำลังซ่อม" 
                value="5" 
                trend="ไม่มีการเปลี่ยนแปลง" 
                trendType="neutral" 
                icon={<Settings size={32} />} 
                color="blue" 
              />
              <StatCard 
                label="เสร็จสิ้นแล้ว" 
                value="48" 
                trend="-5% สัปดาห์นี้" 
                trendType="down" 
                icon={<CheckCircle size={32} />} 
                color="emerald" 
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h4 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                  <ClipboardList className="text-blue-600" />
                  รายการแจ้งซ่อมล่าสุด
                </h4>
                <button className="text-blue-600 text-sm font-bold hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-1">
                  ดูทั้งหมด
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <RepairItem 
                  id="#TK-8821" 
                  title='MacBook Pro 14" M1 - หน้าจอแตก' 
                  date="24 ต.ค. 2023" 
                  customer="วีรพล กิจเจริญ" 
                  status="Processing" 
                  statusNote="ช่างสมชาย กำลังดำเนินการ" 
                  icon={<Laptop size={24} />} 
                />
                <RepairItem 
                  id="#TK-8790" 
                  title="HP LaserJet Pro - หมึกไม่ออก" 
                  date="23 ต.ค. 2023" 
                  customer="รัตนาวรรณ สุขุม" 
                  status="Pending" 
                  statusNote="รอคิวการตรวจสอบ" 
                  icon={<Printer size={24} />} 
                />
                <RepairItem 
                  id="#TK-8755" 
                  title="Dell Precision Workstation - เปิดไม่ติด" 
                  date="22 ต.ค. 2023" 
                  customer="สมัคร รุ่งเรือง" 
                  status="Completed" 
                  statusNote="ดำเนินการเสร็จสิ้น" 
                  icon={<MonitorIcon size={24} />} 
                />
              </div>
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

function StatCard({ label, value, trend, trendType, icon, color }: { label: string; value: string; trend: string; trendType: 'up' | 'down' | 'neutral'; icon: ReactNode; color: 'orange' | 'blue' | 'emerald' }) {
  const colorClasses = {
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
        <h3 className="text-4xl font-black mt-2 tracking-tight">{value}</h3>
        <div className={`mt-4 flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-md w-fit ${
          trendType === 'up' ? 'text-emerald-600 bg-emerald-50' : 
          trendType === 'down' ? 'text-red-500 bg-red-50' : 
          'text-slate-400 bg-slate-50'
        }`}>
          {trendType === 'up' && <TrendingUp size={14} />}
          {trendType === 'down' && <TrendingDown size={14} />}
          {trendType === 'neutral' && <Minus size={14} />}
          <span>{trend}</span>
        </div>
      </div>
      <div className={`size-14 rounded-2xl flex items-center justify-center border ${colorClasses[color]}`}>
        {icon}
      </div>
    </div>
  );
}

function RepairItem({ id, title, date, customer, status, statusNote, icon }: { id: string; title: string; date: string; customer: string; status: string; statusNote: string; icon: ReactNode }) {
  const statusClasses: Record<string, string> = {
    Processing: 'bg-orange-100 text-orange-700 border-orange-200',
    Pending: 'bg-slate-100 text-slate-600 border-slate-200',
    Completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-blue-600/30 hover:shadow-lg transition-all group">
      <div className="flex items-center gap-5">
        <div className="size-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">{id}</span>
            <h5 className="text-base font-bold text-slate-900">{title}</h5>
          </div>
          <div className="flex items-center gap-4 mt-1.5 text-xs text-slate-500">
            <span className="flex items-center gap-1"><History size={14} /> {date}</span>
            <span className="flex items-center gap-1"><User size={14} /> {customer}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${statusClasses[status]}`}>
            {status}
          </span>
          <span className={`text-[10px] mt-1.5 font-medium italic ${status === 'Completed' ? 'text-emerald-500 font-bold' : 'text-slate-400'}`}>
            {statusNote}
          </span>
        </div>
        <button className="size-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-400">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}
