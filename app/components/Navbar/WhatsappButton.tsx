import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const WhatsAppLink = () => {
  return (
    <a
      href="https://wa.me/6281295012668"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md"
    >
      <ChatBubbleLeftRightIcon className="w-5 h-5" />
      Contact Kami
    </a>
  );
};

export default WhatsAppLink;
