// FloatingWhatsApp.tsx
// Cara pakai:
// 1. Simpan file ini di: src/components/WhatsAppFloating/FloatingWhatsApp.tsx
// 2. Import di halaman Home: `import FloatingWhatsApp from './components/WhatsAppFloating/FloatingWhatsApp';`
// 3. Tambahkan di JSX: `<FloatingWhatsApp phone="6281234567890" message="Halo! Ada yang bisa dibantu?" />`
// 4. Ganti `phone` dengan nomormu (format internasional, tanpa +, contoh: 62812...)

import React from 'react';

interface FloatingWhatsAppProps {
  phone?: string;
  message?: string;
  size?: number;
  bottom?: number;
  right?: number;
  left?: number | null;
  zIndex?: number;
  ariaLabel?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phone = '6281234567890',
  message = 'Halo! Ada yang bisa dibantu?',
  size = 56,
  bottom = 24,
  right = 24,
  left = null,
  zIndex = 9999,
  ariaLabel = 'Hubungi via WhatsApp',
}) => {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: `${bottom}px`,
    right: left ? 'auto' : `${right}px`,
    left: left ? `${left}px` : 'auto',
    zIndex,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg,#25D366,#128C7E)',
    cursor: 'pointer',
  };

  const svgStyle: React.CSSProperties = {
    width: '60%',
    height: '60%',
    display: 'block',
  };

  const openWhatsApp = () => {
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      aria-label={ariaLabel}
      title="Chat via WhatsApp"
      onClick={openWhatsApp}
      style={containerStyle}
    >
      <svg
        style={svgStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.01.5C6.01.5 1.19 5.3 1.19 11.28c0 1.98.5 3.92 1.45 5.64L.5 23.5l6.8-1.79c1.6.87 3.4 1.32 5.2 1.32h.02c6 0 10.83-4.8 10.83-10.78 0-3-1.17-5.81-3.83-7.75z" fill="rgba(0,0,0,0.08)" />
        <path d="M17.472 14.382c-.297-.148-1.758-.866-2.03-.965-.273-.1-.472-.148-.672.148-.198.297-.77.965-.945 1.164-.174.198-.35.223-.648.074-.297-.148-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.654-2.059-.174-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.148-.672-1.617-.92-2.216-.242-.583-.487-.504-.672-.513l-.573-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.877 1.213 3.074.148.198 2.095 3.2 5.076 4.487 2.982 1.286 2.982.857 3.517.803.534-.05 1.725-.7 1.968-1.377.244-.675.244-1.25.171-1.377-.074-.123-.273-.198-.57-.347z" fill="#fff" />
      </svg>
    </button>
  );
};

export default FloatingWhatsApp;
