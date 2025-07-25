export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  {
    code: "vi_VN",
    name: "Tiếng Việt",
    flag: "/images/vietnam-flag.png"
  },
  {
    code: "en_US", 
    name: "English",
    flag: "/images/uk-flag.png"
  }
]; 