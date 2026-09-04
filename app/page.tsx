import Link from 'next/link';

// ข้อมูลจำลองสินค้า (ใช้รูป Mockup ปลอดภัย พร้อมใช้งาน)
const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Chanakan Signature Bag',
    price: '฿1,290',
    category: 'Fashion',
    rating: '4.8',
    image: 'https://picsum.photos/seed/bag/500/500',
  },
  {
    id: '2',
    name: 'Wireless Premium Earbuds',
    price: '฿2,590',
    category: 'Gadgets',
    rating: '4.9',
    image: 'https://picsum.photos/seed/earbuds/500/500',
  },
  {
    id: '3',
    name: 'Minimalist Watch Gold',
    price: '฿3,400',
    category: 'Accessories',
    rating: '4.7',
    image: 'https://picsum.photos/seed/watch/500/500',
  },
  {
    id: '4',
    name: 'Smart Desk Lamp',
    price: '฿890',
    category: 'Home',
    rating: '4.6',
    image: 'https://picsum.photos/seed/lamp/500/500',
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', color: '#1f2937', fontFamily: 'sans-serif' }}>
      {/* 1. Navbar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', textDecoration: 'none' }}>
            Chanakan<span style={{ color: '#111827' }}>app</span>
          </Link>

          <nav style={{ display: 'flex', gap: '24px', fontSize: '0.875rem', fontWeight: 500, color: '#4b5563' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#2563eb' }}>หน้าแรก</Link>
            <Link href="#" style={{ textDecoration: 'none', color: '#4b5563' }}>สินค้าทั้งหมด</Link>
            <Link href="#" style={{ textDecoration: 'none', color: '#4b5563' }}>หมวดหมู่</Link>
            <Link href="#" style={{ textDecoration: 'none', color: '#4b5563' }}>เกี่ยวกับเรา</Link>
          </nav>

          <div style={{ position: 'relative' }}>
            <button aria-label="Cart" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#4b5563', display: 'flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <span style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#ef4444', color: '#ffffff', fontSize: '0.75rem', borderRadius: '9999px', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Banner */}
      <section style={{ background: 'linear-gradient(to right, #2563eb, #4338ca)', color: '#ffffff', padding: '64px 16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
              ต้อนรับสู่ Chanakanapp
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, margin: '0 0 16px 0' }}>
              ค้นพบสินค้าคุณภาพดี <br />พร้อมโปรโมชันสุดพิเศษ
            </h1>
            <p style={{ color: '#dbeafe', fontSize: '1.125rem', margin: '0 0 24px 0' }}>
              ช้อปปิ้งสินค้าแบรนด์แท้ ครบจบในที่เดียว จัดส่งรวดเร็ว ปลอดภัย
            </p>
            <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', backgroundColor: '#ffffff', color: '#2563eb', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              ช้อปเลยตอนนี้
            </Link>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '280px' }}>
            <img 
              src="https://picsum.photos/seed/hero/800/600" 
              alt="Chanakanapp Banner" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 3. Features Highlight */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '32px 16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
            <span style={{ fontSize: '2rem' }}>🚚</span>
            <div>
              <h4 style={{ margin: 0, fontWeight: 'bold' }}>จัดส่งฟรีทั่วไทย</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>เมื่อสั่งซื้อครบ ฿500 ขึ้นไป</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
            <span style={{ fontSize: '2rem' }}>🛡️</span>
            <div>
              <h4 style={{ margin: 0, fontWeight: 'bold' }}>รับประกันสินค้าแท้ 100%</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>มั่นใจในคุณภาพ ยินดีคืนเงิน</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
            <span style={{ fontSize: '2rem' }}>💳</span>
            <div>
              <h4 style={{ margin: 0, fontWeight: 'bold' }}>ชำระเงินสะดวก</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>รองรับโอนเงินและบัตรเครดิต</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>สินค้ายอดนิยม</h2>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '4px 0 0 0' }}>คัดสรรสินค้าขายดีที่ได้รับความนิยมสูงสุด</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#f3f4f6' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 500, padding: '2px 8px', borderRadius: '9999px' }}>
                  {product.category}
                </span>
              </div>
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#d97706', marginBottom: '4px' }}>
                    ★ {product.rating}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: '#111827' }}>{product.name}</h3>
                </div>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#2563eb' }}>{product.price}</span>
                  <button style={{ backgroundColor: '#eff6ff', color: '#2563eb', border: 'none', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer', fontWeight: 600 }}>
                    + เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '32px 16px', textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
        <p style={{ margin: 0 }}>© 2026 Chanakanapp. All rights reserved.</p>
      </footer>
    </div>
  );
}
