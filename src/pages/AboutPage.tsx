import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, Clock, Users, Award, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase text-xs tracking-widest">กลับหน้าแรก</span>
          </Link>
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              เกี่ยวกับเรา <span className="text-blue-500">IT Service Desk</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              เราคือผู้นำด้านการให้บริการซ่อมบำรุงอุปกรณ์ไอทีแบบครบวงจร ด้วยเทคโนโลยีที่ทันสมัยและทีมช่างผู้เชี่ยวชาญ
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">ภารกิจของเรา</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                เรามุ่งมั่นที่จะให้บริการซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และไอทีที่มีคุณภาพสูงสุด 
                โดยเน้นความรวดเร็ว ความโปร่งใส และความพึงพอใจของลูกค้าเป็นสำคัญ 
                เราเข้าใจดีว่าอุปกรณ์ไอทีคือหัวใจสำคัญของการทำงานในยุคปัจจุบัน
              </p>
              <div className="space-y-4">
                {[
                  "ให้บริการด้วยมาตรฐานระดับสากล",
                  "ใช้อะไหล่แท้และมีคุณภาพสูง",
                  "รับประกันงานซ่อมทุกรายการ",
                  "ทีมช่างผ่านการอบรมอย่างต่อเนื่อง"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="IT Workshop" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-sm font-bold opacity-80 uppercase tracking-wider">ปีแห่งประสบการณ์</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ทำไมต้องเลือกเรา?</h2>
            <p className="text-slate-500 max-w-xl mx-auto">เราให้ความสำคัญกับทุกรายละเอียดเพื่อให้คุณมั่นใจในทุกบริการ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="text-blue-600" size={32} />}
              title="ความปลอดภัยของข้อมูล"
              description="เรามีมาตรการรักษาความลับและป้องกันข้อมูลรั่วไหลระหว่างการซ่อมแซมอย่างเข้มงวด"
            />
            <ValueCard 
              icon={<Clock className="text-blue-600" size={32} />}
              title="รวดเร็วและตรงเวลา"
              description="เราประเมินระยะเวลาการซ่อมที่แม่นยำและส่งมอบงานตรงตามกำหนดการเสมอ"
            />
            <ValueCard 
              icon={<Award className="text-blue-600" size={32} />}
              title="คุณภาพที่วางใจได้"
              description="ทุกงานซ่อมผ่านการตรวจสอบคุณภาพ (QC) อย่างละเอียดก่อนส่งมอบถึงมือลูกค้า"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">ทีมงานผู้เชี่ยวชาญ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="สมชาย รักดี" role="Senior Technician" image="https://picsum.photos/seed/p1/300/400" />
            <TeamMember name="วิภาดา เก่งกาจ" role="IT Specialist" image="https://picsum.photos/seed/p2/300/400" />
            <TeamMember name="อานนท์ มั่นคง" role="Hardware Engineer" image="https://picsum.photos/seed/p3/300/400" />
            <TeamMember name="กมลวรรณ สดใส" role="Support Manager" image="https://picsum.photos/seed/p4/300/400" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image }: { name: string, role: string, image: string }) {
  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden rounded-3xl aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="text-lg font-bold text-slate-900">{name}</h4>
      <p className="text-sm font-medium text-slate-500">{role}</p>
    </div>
  );
}
