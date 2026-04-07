/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Smartphone, 
  Battery, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Wrench, 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Ekran Almashtirish",
    description: "Barcha turdagi smartfonlar uchun original va sifatli ekranlar.",
    icon: <Smartphone className="w-8 h-8" />,
    price: "150,000 so'mdan"
  },
  {
    title: "Batareya Servisi",
    description: "Tez quvvat yo'qotadigan batareyalarni yangisiga almashtirish.",
    icon: <Battery className="w-8 h-8" />,
    price: "80,000 so'mdan"
  },
  {
    title: "Dasturiy Ta'minot",
    description: "Proshivka, blokdan chiqarish va tizimni optimallashtirish.",
    icon: <Cpu className="w-8 h-8" />,
    price: "50,000 so'mdan"
  },
  {
    title: "Suvdan Tozalash",
    description: "Suv tushgan telefonlarni professional darajada qayta tiklash.",
    icon: <ShieldCheck className="w-8 h-8" />,
    price: "100,000 so'mdan"
  }
];

const stats = [
  { label: "Muvaffaqiyatli Ta'mirlar", value: "10,000+" },
  { label: "Tajribali Ustalar", value: "15+" },
  { label: "Kafolat Muddati", value: "6 Oygacha" },
  { label: "Mijozlar Mamnuniyati", value: "99%" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">iFix Servis</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Xizmatlar</a>
              <a href="#about" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Biz haqimizda</a>
              <a href="#contact" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">Aloqa</a>
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Buyurtma Berish
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#services" className="block px-3 py-4 text-base font-medium text-slate-300 border-b border-slate-800" onClick={() => setIsMenuOpen(false)}>Xizmatlar</a>
                <a href="#about" className="block px-3 py-4 text-base font-medium text-slate-300 border-b border-slate-800" onClick={() => setIsMenuOpen(false)}>Biz haqimizda</a>
                <a href="#contact" className="block px-3 py-4 text-base font-medium text-slate-300" onClick={() => setIsMenuOpen(false)}>Aloqa</a>
                <div className="pt-4">
                  <button className="w-full bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold">
                    Buyurtma Berish
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6">
                <Clock className="w-4 h-4" /> Tezkor va Sifatli Ta'mirlash
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                Telefoningizga <br />
                <span className="text-primary">Yangi Hayot</span> Baxsh Etamiz
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                iPhone, Samsung, Xiaomi va boshqa barcha turdagi smartfonlarni professional darajada ta'mirlaymiz. Original ehtiyot qismlar va kafolatlangan xizmat.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                  Xizmatni Tanlash <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-slate-900 text-white border-2 border-slate-800 px-8 py-4 rounded-2xl text-lg font-bold hover:border-primary transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Bizga Qo'ng'iroq Qiling
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-20 relative max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070" 
                alt="Phone Repair" 
                className="rounded-3xl shadow-2xl border-8 border-slate-900"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">500+ ijobiy fikrlar</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-slate-900/50 border-y border-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">Bizning Xizmatlar</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Sizning qurilmangiz uchun eng yaxshi yechimlarni taklif etamiz. Har bir ishga mas'uliyat bilan yondashamiz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                >
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary font-bold">{service.price}</span>
                    <button className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="about" className="py-32 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1556656793-062ff987825d?auto=format&fit=crop&q=80&w=2070" 
                  alt="Repair Shop" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-white mb-8">Nima uchun aynan bizni tanlashadi?</h2>
                <div className="space-y-6">
                  {[
                    { title: "Original Ehtiyot Qismlar", desc: "Faqatgina ishlab chiqaruvchi tomonidan tasdiqlangan qismlardan foydalanamiz." },
                    { title: "Tezkor Xizmat", desc: "Ko'p hollarda telefoningizni o'sha kunning o'zida ta'mirlab beramiz." },
                    { title: "Kafolatlangan Sifat", desc: "Barcha bajarilgan ishlarimizga 6 oygacha rasmiy kafolat beramiz." },
                    { title: "Hamyonbop Narxlar", desc: "Sifatli xizmatni hamyonbop narxlarda taqdim etishga harakat qilamiz." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-slate-800">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-0" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-6">Savollaringiz bormi?</h2>
                  <p className="text-slate-400 mb-10 text-lg">
                    Biz bilan bog'laning yoki formani to'ldiring. Mutaxassislarimiz sizga tez orada javob berishadi.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Telefon</p>
                        <p className="font-bold">+998 90 123 45 67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Manzil</p>
                        <p className="font-bold">Toshkent sh., Chilonzor tumani, 1-mavze</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Email</p>
                        <p className="font-bold">info@ifix-servis.uz</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Ismingiz</label>
                        <input type="text" className="w-full bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white" placeholder="Ali" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Telefon</label>
                        <input type="tel" className="w-full bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white" placeholder="+998" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Xizmat turi</label>
                      <select className="w-full bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white appearance-none">
                        <option>Ekran almashtirish</option>
                        <option>Batareya servisi</option>
                        <option>Dasturiy ta'minot</option>
                        <option>Boshqa</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Xabar</label>
                      <textarea className="w-full bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none text-white" placeholder="Muammo haqida qisqacha..."></textarea>
                    </div>
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                      Xabar Yuborish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Wrench className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">iFix Servis</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-primary transition-colors">Asosiy</a>
              <a href="#" className="hover:text-primary transition-colors">Xizmatlar</a>
              <a href="#" className="hover:text-primary transition-colors">Narxlar</a>
              <a href="#" className="hover:text-primary transition-colors">Maxfiylik</a>
            </div>

            <p className="text-sm text-slate-500">
              © 2026 iFix Servis. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
