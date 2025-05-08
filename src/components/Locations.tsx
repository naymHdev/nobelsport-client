"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import bd from "../assets/icons/bangladesh.png";
import usa from "../assets/icons/usa-flag.png";
import fr from "../assets/icons/france.png";

const languages = [
  {
    code: "en",
    name: "English",
    flag: usa,
  },
  {
    code: "bd",
    name: "বাংলা",
    flag: bd,
  },
  {
    code: "fr",
    name: "Français",
    flag: fr,
  },
];

const LanguageSelector = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border px-3 py-1.5 border-none w-[133px] h-[29px]"
      >
        <Image
          src={selected.flag}
          alt={selected.name}
          width={20}
          height={15}
          className="rounded-sm "
        />
        <span className="text-sm">{selected.name}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2">
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
