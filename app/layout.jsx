import "@styles/globals.css";
export const metadata = {
  title: "Promtora",
  descriptions: "Discover and Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
