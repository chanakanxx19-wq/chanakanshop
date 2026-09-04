import Link from 'next/link';
import Image from 'next/image';

// ตัวอย่างข้อมูลสินค้า
const featuredProducts = [
  {
    id: '1',
    name: 'สินค้าแนะนำ 1',
    price: 590,
    category: 'อุปกรณ์เสริม',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: '2',
    name: 'สินค้าแนะนำ 2',
    price: 1290,
    category: 'เสื้อผ้า',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: '3',
    name: 'สินค้าแนะนำ 3',
    price: 850,
    category: 'ของใช้ในบ้าน',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: '4',
    name: 'สินค้าแนะนำ 4',
    price: 420,
    category: 'อุปกรณ์เสริม',
    image: 'https://via.placeholder.com/300',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. Header & Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            kruklaapp
          </Link>
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-blue-600">
              🛒 ตระกร้า
            </Link>
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Banner Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            ยินดีต้อนรับสู่ kruklaapp
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            แหล่งรวมสินค้าราคาพิเศษ คัดสรรคุณภาพเพื่อคุณโดยเฉพาะ Shopping ได้ง่ายๆ ทุกที่ทุกเวลา
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            เลือกช้อปเลย
          </Link>
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">สินค้ายอดนิยม</h2>
            <p className="text-gray-500 text-sm">สินค้าที่ลูกค้าสั่งซื้อมากที่สุดในสัปดาห์นี้</p>
          </div>
          <Link href="/products" className="text-blue-600 hover:underline font-medium text-sm">
            ดูทั้งหมด &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-800 text-lg line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xl font-bold text-gray-900">
                    ฿{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  เพิ่มลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 4. Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} kruklaapp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
