import "./globals.css";

export const metadata = {
  title: "VisaPath — Your Trusted Immigration Partner",
  description:
    "Get expert guidance for study abroad applications, visa processing, and university admissions. 500+ letters issued with 97% approval rate.",
  keywords: "immigration, study abroad, visa, university admission, IELTS, consultation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
