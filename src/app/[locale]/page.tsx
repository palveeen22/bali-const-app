import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("navbarLabel");

  return (
    <main className="min-h-screen bg-red-400">
      <p>{t("home")}</p>
    </main>
  );
}