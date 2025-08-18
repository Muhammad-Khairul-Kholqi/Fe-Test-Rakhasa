import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}