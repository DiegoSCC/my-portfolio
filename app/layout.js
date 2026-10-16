import { Outfit, Ovo } from "next/font/google";
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
  title: "Diego Cuello — Backend & APIs",
  description:
    "Portfolio of Diego Cuello, web developer focused on backend systems, APIs, databases, and full-stack development.",
  openGraph: {
    title: "Diego Cuello — Backend & APIs",
    description:
      "Web developer focused on backend systems, APIs, databases, and full-stack development.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c100e" },
  ],
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
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${ovo.variable} font-outfit antialiased leading-8`}>
        {children}
      </body>
    </html>
  );
}
