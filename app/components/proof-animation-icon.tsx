"use client";

import Lottie from "lottie-react";
import animalLover from "@/public/animated/animal-lover.json";
import crueltyFree from "@/public/animated/cruelty-free.json";
import insurance from "@/public/animated/insurance.json";
import pawEmblem from "@/public/animated/paw-emblem.json";
import petLove from "@/public/animated/pet-love.json";

const proofAnimations = {
  "animal-lover": animalLover,
  "cruelty-free": crueltyFree,
  insurance,
  "paw-emblem": pawEmblem,
  "pet-love": petLove,
} as const;

export type ProofAnimationName = keyof typeof proofAnimations;

type ProofAnimationIconProps = {
  name: ProofAnimationName;
  className?: string;
};

export default function ProofAnimationIcon({ name, className }: ProofAnimationIconProps) {
  return (
    <div className={className} aria-hidden="true">
      <Lottie animationData={proofAnimations[name]} loop autoplay />
    </div>
  );
}
