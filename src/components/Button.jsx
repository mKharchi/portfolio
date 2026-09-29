"use client";

import Link from "next/link";

const Button = () => (
  <Link
    href="#projects"
    className="inline-flex items-center justify-center rounded-lg bg-[#161a31] px-7 py-4 text-[15px] tracking-wide text-[#efefef] shadow-[inset_0_0_10px_#161a31,0_0_9px_3px_#06091f] transition-colors duration-150 hover:text-[#82ffc9]"
  >
    See my projects
    <svg className="ml-2 h-4 w-4 -rotate-45" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
);

export default Button;
