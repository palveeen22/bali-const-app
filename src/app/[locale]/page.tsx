import BenefitsSection from "@/src/components/pages/BenefitsSection";
import HomeSection from "@/src/components/pages/HomeSection";
import PartnersSection from "@/src/components/pages/PartnersSection";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
    <HomeSection/>
    <PartnersSection/>
    <BenefitsSection/>
    </Fragment>
  );
}