import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Ticket, History, BarChart, Package, Settings, Search, Bell, Moon, PlusCircle, MoreVertical, Laptop, Printer, Monitor as MonitorIcon, Filter, ChevronDown, User, Calendar } from 'lucide-react';

export default function TicketsPage() {
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
          <SidebarLink to="/tickets" icon={<Ticket size={20} />} label="รายการแจ้งซ่อม" active />
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
                placeholder="ค้นหาเลขอ้างอิง, อุปกรณ์..." 
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

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">รายการแจ้งซ่อมทั้งหมด</h2>
                <p className="text-slate-500 font-medium">จัดการและติดตามสถานะงานซ่อมที่ได้รับมอบหมาย</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  <Filter size={18} />
                  ตัวกรอง
                  <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  <Calendar size={18} />
                  ช่วงเวลา
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">เลขอ้างอิง</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">อุปกรณ์ / อาการ</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">ผู้แจ้ง</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">วันที่แจ้ง</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">สถานะ</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <TicketRow 
                      id="#TK-8821" 
                      device="MacBook Pro 14 inch M1" 
                      issue="หน้าจอแตก" 
                      customer="วีรพล กิจเจริญ" 
                      date="24 ต.ค. 2023" 
                      status="Processing" 
                      icon={<Laptop size={18} />}
                    />
                    <TicketRow 
                      id="#TK-8790" 
                      device="HP LaserJet Pro" 
                      issue="หมึกไม่ออก" 
                      customer="รัตนาวรรณ สุขุม" 
                      date="23 ต.ค. 2023" 
                      status="Pending" 
                      icon={<Printer size={18} />}
                    />
                    <TicketRow 
                      id="#TK-8755" 
                      device="Dell Precision" 
                      issue="เปิดไม่ติด" 
                      customer="สมัคร รุ่งเรือง" 
                      date="22 ต.ค. 2023" 
                      status="Completed" 
                      icon={<MonitorIcon size={18} />}
                    />
                    <TicketRow 
                      id="#TK-8740" 
                      device="iPad Air 5" 
                      issue="ชาร์จไฟไม่เข้า" 
                      customer="กัญญาพร ใจดี" 
                      date="21 ต.ค. 2023" 
                      status="Processing" 
                      icon={<Laptop size={18} />}
                    />
                    <TicketRow 
                      id="#TK-8732" 
                      device="Logitech G502" 
                      issue="คลิกซ้ายไม่ติด" 
                      customer="สมชาย สายลม" 
                      date="20 ต.ค. 2023" 
                      status="Completed" 
                      icon={<Settings size={18} />}
                    />
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <p className="text-xs text-slate-500 font-medium">แสดง 1-5 จากทั้งหมด 12 รายการ</p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">ก่อนหน้า</button>
                  <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold">1</button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">ถัดไป</button>
                </div>
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

function TicketRow({ id, device, issue, customer, date, status, icon }: { id: string; device: string; issue: string; customer: string; date: string; status: string; icon: ReactNode }) {
  const statusClasses: Record<string, string> = {
    Processing: 'bg-orange-100 text-orange-700 border-orange-200',
    Pending: 'bg-slate-100 text-slate-600 border-slate-200',
    Completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="px-6 py-4">
        <span className="text-xs font-black font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{id}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
            {icon}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{device}</p>
            <p className="text-xs text-slate-500">{issue}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-slate-200 overflow-hidden">
            <img src={`https://picsum.photos/seed/${customer}/24/24`} alt="" referrerPolicy="no-referrer" />
          </div>
          <span className="text-sm font-medium text-slate-700">{customer}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500 font-medium">{date}</td>
      <td className="px-6 py-4">
        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${statusClasses[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="size-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-400 ml-auto">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}
