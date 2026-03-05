import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Ticket, History, BarChart, Package, Settings, Search, Bell, Moon, PlusCircle, MoreVertical, Monitor as MonitorIcon, Filter, ChevronDown, Plus, Box } from 'lucide-react';

export default function InventoryPage() {
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
          <SidebarLink to="/history" icon={<History size={20} />} label="ประวัติการซ่อม" />
          
          <div className="pt-6 pb-2">
            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-2">รายงาน & การจัดการ</p>
          </div>
          <SidebarLink to="/reports" icon={<BarChart size={20} />} label="รายงานสถิติ" />
          <SidebarLink to="/inventory" icon={<Package size={20} />} label="คลังอุปกรณ์" active />
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
                placeholder="ค้นหาอุปกรณ์, อะไหล่..." 
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
            <button className="h-11 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all transform active:scale-[0.98]">
              <Plus size={20} />
              เพิ่มอุปกรณ์ใหม่
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">คลังอุปกรณ์และอะไหล่</h2>
                <p className="text-slate-500 font-medium">จัดการสต็อกอุปกรณ์ไอทีและอะไหล่สำหรับการซ่อมบำรุง</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                  <Filter size={18} />
                  หมวดหมู่
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InventoryStat label="รายการทั้งหมด" value="156" icon={<Box size={24} />} color="blue" />
              <InventoryStat label="ใกล้หมด" value="12" icon={<Bell size={24} />} color="orange" />
              <InventoryStat label="หมดสต็อก" value="3" icon={<PlusCircle size={24} />} color="red" />
              <InventoryStat label="มูลค่ารวม" value="฿45,200" icon={<Package size={24} />} color="emerald" />
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">ชื่ออุปกรณ์ / อะไหล่</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">หมวดหมู่</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">จำนวนคงเหลือ</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">ราคาต่อหน่วย</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">สถานะ</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <InventoryRow name="RAM DDR4 8GB" category="Memory" stock={24} price="฿1,200" status="In Stock" />
                    <InventoryRow name="SSD 500GB NVMe" category="Storage" stock={8} price="฿1,850" status="Low Stock" />
                    <InventoryRow name="Power Supply 650W" category="Power" stock={15} price="฿2,400" status="In Stock" />
                    <InventoryRow name="Thermal Paste MX-4" category="Maintenance" stock={0} price="฿350" status="Out of Stock" />
                    <InventoryRow name="LCD Panel 14.0 inch" category="Display" stock={5} price="฿3,200" status="In Stock" />
                  </tbody>
                </table>
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

function InventoryStat({ label, value, icon, color }: { label: string; value: string; icon: ReactNode; color: 'blue' | 'orange' | 'red' | 'emerald' }) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
      <div className={`size-12 rounded-xl flex items-center justify-center border ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <p className="text-xl font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function InventoryRow({ name, category, stock, price, status }: { name: string; category: string; stock: number; price: string; status: string }) {
  const statusClasses: Record<string, string> = {
    'In Stock': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Low Stock': 'bg-orange-100 text-orange-700 border-orange-200',
    'Out of Stock': 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
        <p className="text-sm font-bold text-slate-900">{name}</p>
      </td>
      <td className="px-6 py-4">
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{category}</span>
      </td>
      <td className="px-6 py-4 text-sm font-bold text-slate-700">{stock} ชิ้น</td>
      <td className="px-6 py-4 text-sm text-slate-600 font-medium">{price}</td>
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
