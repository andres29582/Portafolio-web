import type { FooterContent } from "@/content/types";

interface FooterProps {
  content: FooterContent;
  name: string;
}

export function Footer({ content, name }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
        <p>
          © {year} {name}. {content.rights}.
        </p>
        <p>{content.builtWith}</p>
      </div>
    </footer>
  );
}
