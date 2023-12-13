import Head from "next/head";
import Header from "@/components/about/Header";
import BeliefsSection from "@/components/about/BeliefsSection";
import PartnersSection from "@/components/about/PartnersSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import StatisticSection from "@/components/about/StatisticSection";
import TeamSection from "@/components/about/TeamSection";
import BrandDetailsSection from "@/components/about/BrandDetailsSection";
import LinksCardsSection from "@/components/about/LinksCardsSection";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - xBorg</title>
        <meta
          name="description"
          content="Learn more about our company and what we stand for."
        />
      </Head>
      <Header />
      <BeliefsSection />
      <PartnersSection />
      <FeaturesSection />
      <StatisticSection />
      <TeamSection />
      <BrandDetailsSection />
      <LinksCardsSection />
    </>
  );
}
