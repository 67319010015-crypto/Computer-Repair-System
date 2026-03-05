import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Ticket, History, BarChart, Package, Settings, Search, Bell, Moon, Monitor as MonitorIcon, Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const repairData = [
  { name: 'ม.ค.', count: 45 },
  { name: 'ก.พ.', count: 52 },
  { name: 'มี.ค.', count: 38 },
  { name: 'เม.ย.', count: 65 },
  { name: 'พ.ค.', count: 48 },
  { name: 'มิ.ย.', count: 59 },
];

const deviceTypeData = [
  { name: 'Laptop', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Printer', value: 200 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

export default function ReportsPage() {
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
          <SidebarLink to="/reports" icon={<BarChart size={20} />} label="รายงานสถิติ" active />
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
            <h2 className="text-xl font-bold text-slate-900">รายงานและสถิติ</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
              <Download size={18} />
              ดาวน์โหลด PDF
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard label="งานซ่อมทั้งหมด" value="312" trend="+12.5%" positive={true} />
              <StatCard label="เวลาซ่อมเฉลี่ย" value="1.5 วัน" trend="-0.2 วัน" positive={true} />
              <StatCard label="ความพึงพอใจ" value="4.8/5.0" trend="+0.1" positive={true} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-900">ปริมาณงานซ่อมรายเดือน</h3>
                  <select className="text-xs font-bold bg-slate-100 border-none rounded-lg px-3 py-1.5 outline-none">
                    <option>ปี 2023</option>
                    <option>ปี 2022</option>
                  </select>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={repairData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        cursor={{ fill: '#f8fafc' }}
                      />
                      <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">สัดส่วนประเภทอุปกรณ์</h3>
                <div className="h-[300px] w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deviceTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deviceTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2">
                    {deviceTypeData.map((item, index) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="size-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="text-xs font-bold text-slate-600">{item.name}</span>
                        <span className="text-xs font-medium text-slate-400">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">แนวโน้มการแจ้งซ่อม</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={repairData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} dot={{ r: 6, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
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

function StatCard({ label, value, trend, positive }: { label: string; value: string; trend: string; positive: boolean }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <h4 className="text-3xl font-black text-slate-900">{value}</h4>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${positive ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      </div>
    </div>
  );
}
