import Link from 'next/link';
import { ShoppingCart, ArrowRight, Star, ShieldCheck, Truck, CreditCard } from 'lucide-react';

// ตัวอย่างข้อมูลสินค้าจำลอง
const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Chanakan Signature Bag',
    price: '฿1,290',
    category: 'Fashion',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
  },
  {
    id: '2',
    name: 'Wireless Premium Earbuds',
    price: '฿2,590',
    category: 'Gadgets',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
  },
  {
    id: '3',
    name: 'Minimalist Watch Gold',
    price: '฿3,400',
    category: 'Accessories',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: '4',
    name: 'Smart Desk Lamp',
    price: '฿890',
    category: 'Home',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            Chanakan<span className="text-gray-900">app</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition">หน้าแรก</Link>
            <Link href="/products" className="hover:text-blue-600 transition">สินค้าทั้งหมด</Link>
            <Link href="/categories" className="hover:text-blue-600 transition">หมวดหมู่</Link>
            <Link href="/about" className="hover:text-blue-600 transition">เกี่ยวกับเรา</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-600 hover:text-blue-600 transition"
              aria-label="ตะกร้าสินค้า"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                2
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-blue-500/30 rounded-full text-xs font-semibold tracking-wide uppercase">
              ต้อนรับสู่ Chanakanapp
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              ค้นพบสินค้าคุณภาพดี <br />พร้อมโปรโมชันสุดพิเศษ
            </h1>
            <p className="text-blue-100 text-lg">
              ช้อปปิ้งสินค้าแบรนด์แท้ ครบจบในที่เดียว จัดส่งรวดเร็ว ปลอดภัย พร้อมบริการหลังการขายระดับพรีเมียม
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition"
              >
                ช้อปเลยตอนนี้ <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" 
              alt="Chanakanapp Shopping" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Features Banner */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50">
            <Truck className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-900">จัดส่งฟรีทั่วไทย</h4>
              <p className="text-sm text-gray-500">เมื่อสั่งซื้อสินค้าครบ ฿500 ขึ้นไป</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-900">รับประกันสินค้าแท้ 100%</h4>
              <p className="text-sm text-gray-500">มั่นใจในคุณภาพ ยินดีคืนเงิน</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-900">ชำระเงินได้หลายช่องทาง</h4>
              <p className="text-sm text-gray-500">โอนเงิน, บัตรเครดิต หรือเก็บเงินปลายทาง</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">สินค้ายอดนิยม</h2>
            <p className="text-gray-500 text-sm mt-1">คัดสรรสินค้าขายดีที่ได้รับความนิยมสูงสุดในขณะนี้</p>
          </div>
          <Link href="/products" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center">
            ดูทั้งหมด <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col">
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-gray-700">
                  {product.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 text-xs mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>© 2026 Chanakanapp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
