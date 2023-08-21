import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Estagio",
  description: "Desenvolve Estagio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="main">
        <div className="gradient"></div>

        <main className="app">
          {/* <Nav /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
