import { Metadata } from "next";
import { GuideContent } from "./GuideContent";

export const metadata: Metadata = {
  title: "The Buffet Diet Guide - Free Mini Book | The Buffet Diet",
  description:
    "The ultimate guide to losing weight while eating at buffets. Combine intermittent fasting with all-you-can-eat restaurants. Save time, save money, lose fat. By Benjamin Karlsson.",
};

export default function GuidePage() {
  return <GuideContent />;
}
