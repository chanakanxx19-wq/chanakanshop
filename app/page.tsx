import Link from 'next/link';

// ลิงก์รูปภาพถ่ายสินค้าโดยตรง (Product Photography)
const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Chanakan Signature Bag',
    price: '฿1,290',
    category: 'Fashion',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Wireless Premium Earbuds',
    price: '฿2,590',
    category: 'Gadgets',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Minimalist Watch Gold',
    price: '฿3,400',
    category: 'Accessories',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Smart Desk Lamp',
    price: '฿890',
    category: 'Home',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            Chanakan<span className="text-slate-900">app</span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <Link href="/" className="text-blue-600">หน้าแรก</Link>
            <Link href="#" className="hover:text-blue-600 transition">สินค้าทั้งหมด</Link>
            <Link href="#" className="hover:text-blue-600 transition">หมวดหมู่</Link>
            <Link href="#" className="hover:text-blue-600 transition">เกี่ยวกับเรา</Link>
          </nav>

          <div className="relative">
            <button aria-label="ตะกร้าสินค้า" className="p-2 text-slate-600 hover:text-blue-600 transition relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-blue-500/30 rounded-full text-xs font-semibold tracking-wide uppercase">
              ต้อนรับสู่ Chanakanapp
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              ค้นพบสินค้าคุณภาพดี <br />พร้อมโปรโมชันสุดพิเศษ
            </h1>
            <p className="text-blue-100 text-lg">
              ช้อปปิ้งสินค้าแบรนด์แท้ ครบจบในที่เดียว จัดส่งรวดเร็ว ปลอดภัย
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              ช้อปเลยตอนนี้ →
            </Link>
          </div>
          <div className="hidden md:block relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80" 
              alt="Chanakanapp Shopping Banner" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Features Highlight */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50">
            <span className="text-3xl">🚚</span>
            <div>
              <h4 className="font-bold text-slate-900">จัดส่งฟรีทั่วไทย</h4>
              <p className="text-sm text-slate-500">เมื่อสั่งซื้อสินค้าครบ ฿500 ขึ้นไป</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50">
            <span className="text-3xl">🛡️</span>
            <div>
              <h4 className="font-bold text-slate-900">รับประกันสินค้าแท้ 100%</h4>
              <p className="text-sm text-slate-500">มั่นใจในคุณภาพ ยินดีคืนเงิน</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50">
            <span className="text-3xl">💳</span>
            <div>
              <h4 className="font-bold text-slate-900">ชำระเงินสะดวก</h4>
              <p className="text-sm text-slate-500">รองรับโอนเงิน บัตรเครดิต และปลายทาง</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">สินค้ายอดนิยม</h2>
            <p className="text-slate-500 text-sm mt-1">คัดสรรสินค้าขายดีที่ได้รับความนิยมสูงสุด</p>
          </div>
          <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
            ดูทั้งหมด →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition flex flex-col">
              <div className="relative h-56 bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-slate-700">
                  {product.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 text-xs font-semibold mb-1">
                    ★ {product.rating}
                  </div>
                  <h3 className="font-semibold text-slate-900 line-clamp-1">{product.name}</h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                    + เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Chanakanapp. All rights reserved.</p>
      </footer>
    </div>
  );
}
