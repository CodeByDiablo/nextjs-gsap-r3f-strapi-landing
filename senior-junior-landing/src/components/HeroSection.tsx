"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GlowingNetwork } from "./GlowingNetwork";

type HomepageData = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroHint?: string;
  whatsappLink?: string;
};

interface HeroProps {
  homepage?: HomepageData;
}

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: 0.04em;
`;

const GradientText = styled.span`
  background: linear-gradient(120deg, #00ffc6, #ff3b81, #8b8bfd);
  -webkit-background-clip: text;
  color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  max-width: 36rem;
  opacity: 0.85;
  margin-bottom: 1.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  background: radial-gradient(circle at top left, #00ffc6, #0ea5e9);
  color: #05060a;
  font-weight: 600;
  font-size: 0.98rem;
  position: relative;
  box-shadow: 0 0 25px rgba(0, 255, 198, 0.35);
  cursor: pointer;
  border: none;
`;

const Hint = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 0.5rem;
`;

const ThreeContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.55;
`;

export const HeroSection = ({ homepage }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".hero-hint", {
        y: 10,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const title = homepage?.heroTitle || "Senior & Junior";
  const subtitle =
    homepage?.heroSubtitle ||
    "Get real guidance notes and college updates directly from your seniors. No formality just a helping hand when you need it.";
  const hint = homepage?.heroHint || "Not just a batch a family.";
  const whatsappLink =
    homepage?.whatsappLink ||
    "https://chat.whatsapp.com/GG9nuiZIIR253qCRkU6Sd9";

  return (
    <HeroWrapper ref={heroRef as any}>
      <ThreeContainer>
        <GlowingNetwork />
      </ThreeContainer>

      <Content>
        <Title className="hero-title">
          <GradientText>{title}</GradientText>
        </Title>
        <Subtitle className="hero-subtitle">{subtitle}</Subtitle>

        <ButtonRow>
          <PrimaryButton
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            Join WhatsApp Group
          </PrimaryButton>
        </ButtonRow>

        <Hint className="hero-hint">{hint}</Hint>
      </Content>
    </HeroWrapper>
  );
};
