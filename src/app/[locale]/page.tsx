import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("navbarLabel");

  return (
    <main>
      <p>{t("home")}</p>
    </main>
  );
}