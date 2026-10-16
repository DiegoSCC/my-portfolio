import { Outfit, Ovo  } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Diego Cuello",
  description: "Portafolio profesional de Diego Cuello, desarrollador web con enfoque en Backend, Node.js, Express, PostgreSQL y Next.js.",
  openGraph: {
    title: "Portfolio - Diego Cuello",
    description: "Portafolio profesional de Diego Cuello, desarrollador web con enfoque en Backend, Node.js, Express, PostgreSQL y Next.js.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${ovo.variable} font-outfit antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
