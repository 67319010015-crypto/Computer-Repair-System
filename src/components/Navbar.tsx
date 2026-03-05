import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, ClipboardList, Info, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (!isLanding) return null;

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center px-6 lg:px-12">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
          <Monitor size={24} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold leading-none text-slate-900">CRS</h1>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Computer Repair System</span>
        </div>
      </div>
      
      <nav className="ml-12 hidden md:flex items-center gap-1 h-full">
        <NavLink to="/" icon={<Monitor size={18} />} label="หน้าหลัก" active={location.pathname === '/'} />
        <NavLink to="/dashboard" icon={<ClipboardList size={18} />} label="ติดตามสถานะ" active={location.pathname === '/dashboard'} />
        <NavLink to="/about" icon={<Info size={18} />} label="เกี่ยวกับเรา" active={location.pathname === '/about'} />
        <NavLink to="/contact" icon={<HelpCircle size={18} />} label="ติดต่อเรา" active={location.pathname === '/contact'} />
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <Link to="/login" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-semibold text-sm px-4">
          ลงชื่อเข้าใช้
        </Link>
        <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm">
          ลงทะเบียน
        </Link>
      </div>
    </header>
  );
}

function NavLink({ to, icon, label, active = false }: { to: string; icon: ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-600 hover:text-blue-600'
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
