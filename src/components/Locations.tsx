"use client";

import { useState } from "react";
import Image from "next/image";
import bd from "../assets/icons/bangladesh.png";
import usa from "../assets/icons/usa-flag.png";
import fr from "../assets/icons/france.png";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

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

  return (
    <div className="relative inline-block text-left">
      <Select
        value={selected.code}
        onValueChange={(value) => {
          const language = languages.find((lang) => lang.code === value);
          if (language) setSelected(language);
        }}
      >
        <SelectTrigger className="focus:outline-none focus-visible:ring-0 focus-visible:border-none border-none shadow-none">
          <Image
            src={selected.flag}
            alt={selected.name}
            width={45}
            height={45}
            className="rounded-sm"
          />
          <span className="text-sm">{selected.name}</span>
        </SelectTrigger>
        <SelectContent className="absolute z-50 mt-2 w-full bg-white border-none">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center gap-2">
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={30}
                  height={25}
                  className="rounded-sm"
                />
                <span className="text-sm">{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
