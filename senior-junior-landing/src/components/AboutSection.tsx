"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HomepageData = {
  aboutTitle?: string;
  aboutText?: string;
};

interface Props {
  homepage?: HomepageData;
}

const Section = styled.section`
  padding: 5rem 10vw;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  max-width: 700px;
  opacity: 0.85;
  line-height: 1.6;
`;

export const AboutSection = ({ homepage }: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = homepage?.aboutTitle || "About Senior & Junior";
  const text =
    homepage?.aboutText ||
    "Senior & Junior is a student driven community built to connect BCA and MCA juniors with their seniors.";

  return (
    <Section id="about" ref={sectionRef}>
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </Section>
  );
};
