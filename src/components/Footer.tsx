'use client';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Sakshi Kumari. All rights reserved.</p>
        <p>Built with Next.js, Framer Motion & Three.js</p>
      </div>
    </footer>
  );
}
