'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '/flags/us.png', // Place flag images in the public/flags folder
  },
  {
    code: 'bd',
    name: 'বাংলা',
    flag: '/flags/bd.png',
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '/flags/fr.png',
  },
];

const LanguageSelector = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border px-3 py-1.5 rounded-md bg-white hover:bg-gray-100"
      >
        <Image
          src={selected.flag}
          alt={selected.name}
          width={20}
          height={15}
          className="rounded-sm"
        />
        <span className="text-sm">{selected.name}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-40 bg-white border rounded shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
