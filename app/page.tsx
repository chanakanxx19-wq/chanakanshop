'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: string;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chanakan Signature Bag',
    price: 1290,
    category: 'Fashion',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Wireless Premium Earbuds',
    price: 2590,
    category: 'Gadgets',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Minimalist Watch Gold',
    price: 3400,
    category: 'Accessories',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Smart Desk Lamp',
    price: 890,
    category: 'Home',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
  },
];

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // --- Chatbot State ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'สวัสดีครับ! ยินดีต้อนรับสู่ Chanakanapp มีอะไรให้ผู้ช่วยตอบคำถามช่วยเหลือไหมครับ?' },
  ]);

  // ฟังก์ชันเพิ่มสินค้า
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });

    setToastMessage(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว!`);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // --- Chatbot Logic ---
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    // เพิ่มข้อความผู้ใช้
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    if (!textToSend) setInputMessage('');

    // ประมวลผลคำตอบอัตโนมัติ
    setTimeout(() => {
      let botResponse = 'ขออภัยครับ เจ้าหน้าที่จะรีบมาตอบกลับให้เร็วที่สุด หรือลองเลือกคำถามยอดฮิตด้านล่างได้เลยครับ';
      const lowerText = text.toLowerCase();

      if (lowerText.includes('ส่ง') || lowerText.includes('ค่าส่ง') || lowerText.includes('ขนส่ง')) {
        botResponse = 'จัดส่งฟรีทั่วไทยเมื่อซื้อครบ ฿500 ขึ้นไปครับ! (หากไม่ถึง ค่าจัดส่งเริ่มต้น ฿40 ครับ)';
      } else if (lowerText.includes('ประกัน') || lowerText.includes('แท้')) {
        botResponse = 'สินค้าทุกชิ้นใน Chanakanapp รับประกันของแท้ 100% มีปัญหาเปลี่ยนคืนได้ภายใน 7 วันครับ';
      } else if (lowerText.includes('ติดตาม') || lowerText.includes('พัสดุ')) {
        botResponse = 'สามารถนำเลข Tracking Code ไปเช็กสถานะการจัดส่งได้ที่เมนู "ติดตามพัสดุ" ในโปรไฟล์ของคุณได้เลยครับ';
      } else if (lowerText.includes('ชำระเงิน') || lowerText.includes('จ่ายเงิน')) {
        botResponse = 'เรารองรับทั้งการโอนผ่าน QR Code, บัตรเครดิต/เดบิต และบริการเก็บเงินปลายทาง (COD) ครับ';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 transition-all duration-300">
          {toastMessage}
        </div>
      )}

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
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

          {/* ปุ่มเปิดตะกร้าสินค้า */}
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="ตะกร้าสินค้า"
              className="p-2 text-slate-600 hover:text-blue-600 transition relative flex items-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Products Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">สินค้ายอดนิยม</h2>
            <p className="text-slate-500 text-sm mt-1">กดปุ่ม "+ เพิ่มลงตะกร้า" หรือลองทักแชตคุยกับแชตบอตมุมขวาล่างได้เลย</p>
          </div>
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
                  <span className="text-lg font-bold text-blue-600">฿{product.price.toLocaleString()}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition active:scale-95"
                  >
                    + เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Floating Chatbot Component --- */}
      <div className="fixed bottom-5 right-5 z-50">
        {!isChatOpen ? (
          // ปุ่มกลมสำหรับกดเปิดแชต
          <button
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-105"
            aria-label="เปิดผู้ช่วยแชตบอต"
          >
            <span className="text-2xl">💬</span>
          </button>
        ) : (
          // หน้าต่างกล่องข้อความ Chatbot
          <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
            {/* Header แชต */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                <div>
                  <h3 className="font-bold text-sm">ผู้ช่วย ChanakanBot</h3>
                  <p className="text-xs text-blue-100">ตอบกลับอัตโนมัติ 24 ชม.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)} 
                className="text-blue-100 hover:text-white font-bold p-1 text-lg"
              >
                ✕
              </button>
            </div>

            {/* แสดงรายการข้อความ */}
            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-slate-50 text-xs">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* ตัวเลือกคำถามยอดฮิต (Quick Suggestions) */}
            <div className="p-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto text-[11px]">
              <button
                onClick={() => handleSendMessage('ค่าจัดส่งเท่าไหร่?')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-full text-slate-600 whitespace-nowrap transition"
              >
                🚚 ค่าจัดส่ง?
              </button>
              <button
                onClick={() => handleSendMessage('การรับประกันสินค้า')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-full text-slate-600 whitespace-nowrap transition"
              >
                🛡️ การรับประกัน?
              </button>
              <button
                onClick={() => handleSendMessage('ช่องทางการชำระเงิน')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-full text-slate-600 whitespace-nowrap transition"
              >
                💳 การชำระเงิน?
              </button>
            </div>

            {/* ช่องพิมพ์ข้อความ */}
            <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input
                type="text"
                placeholder="พิมพ์คำถามที่นี่..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={() => handleSendMessage()}
                className="px-3 py-2 bg-blue-600 text-white rounded-xl font-semibold text-xs hover:bg-blue-700 transition"
              >
                ส่ง
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🛒 ตะกร้าสินค้าของคุณ</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-semibold">
                    {totalCartCount} รายการ
                  </span>
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 text-xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <p className="text-4xl mb-2">🛍️</p>
                    <p>ยังไม่มีสินค้าในตะกร้า</p>
                  </div>
                ) : (
                  cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{product.name}</h4>
                          <p className="text-xs text-blue-600 font-bold mt-0.5">฿{product.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-slate-200 bg-white rounded-md">
                            <button 
                              onClick={() => updateQuantity(product.id, -1)}
                              className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 rounded-l"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-semibold">{quantity}</span>
                            <button 
                              onClick={() => updateQuantity(product.id, 1)}
                              className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 rounded-r"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(product.id)}
                            className="text-xs text-red-500 hover:underline"
                          >
                            ลบ
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
                  <div className="flex justify-between text-slate-600 text-sm">
                    <span>ราคารวมทั้งหมด</span>
                    <span className="text-lg font-bold text-blue-600">฿{totalPrice.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => alert('นำคุณเข้าสู่ขั้นตอนการชำระเงิน!')}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
                  >
                    ดำเนินการสั่งซื้อ สินค้า →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Chanakanapp. All rights reserved.</p>
      </footer>
    </div>
  );
}
