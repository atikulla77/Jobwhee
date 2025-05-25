import { Header } from "@/components/landingApp/Header/Header";
import { HeroSection } from "@/components/landingApp/HeroSection/HeroSection";
import { DiscoverSection } from "@/components/landingApp/DiscoverSection/DiscoverSection";
import { SuccessFullContractSection } from "@/components/landingApp/SuccessFullContractSection/SuccessFullContractSection";
import { FindPerfectSection } from "@/components/landingApp/FindPerfect/FindPerfect";
import StepsOfSuccess from "@/components/landingApp/StepsOfSuccess/StepsOfSuccess";
import AdvantagesOfThePlatform from "@/components/landingApp/Advantages/Advantages";
import { TopTalentSection } from "@/components/landingApp/TopTalentSection/TopTalentSection";
import { AnswerSection } from "@/components/landingApp/AnswersSection/AnswersSection";
import { Footer } from "@/components/landingApp/Footer/Footer";
import { VideoSection } from "@/components/landingApp/VideoSection/VideoSection";
import TalentProfileCard from "@/shared/widgets/TalentProfileCard/TalentProfileCard";

export default function Home() {
  return (
    <div className=" bg-[#F0F1F4] px-[20px] sm:px-[40px] xxl:px-[120px] 2xl:px-0 pt-[30px] sm:pt-[25px] 2xl:pl-2 ">
      <Header />
      <HeroSection />
      <DiscoverSection />
      <SuccessFullContractSection />
      <FindPerfectSection />
      <StepsOfSuccess />
      <AdvantagesOfThePlatform />
      <VideoSection />
      <TopTalentSection />
      <AnswerSection />
      <Footer />
    </div>
  );
}
