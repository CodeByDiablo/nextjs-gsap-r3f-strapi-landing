"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  whatsappLink?: string;
}

const Section = styled.section`
  padding: 5rem 10vw 6rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  max-width: 600px;
  opacity: 0.85;
  margin-bottom: 1.5rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  background: radial-gradient(circle at top left, #ff3b81, #8b8bfd);
  color: #05060a;
  font-weight: 600;
  font-size: 0.98rem;
  box-shadow: 0 0 25px rgba(248, 113, 166, 0.4);
  cursor: pointer;
`;

export const ContactSection = ({ whatsappLink }: Props) => {
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

  const href =
    whatsappLink || "https://chat.whatsapp.com/GG9nuiZIIR253qCRkU6Sd9";

  return (
    <Section id="contact" ref={sectionRef}>
      <Heading>Contact and Join</Heading>
      <Text>
        Have questions suggestions or want to help as a senior mentor? Join the
        WhatsApp group to get started.
      </Text>
      <PrimaryButton href={href} target="_blank" rel="noreferrer">
        Join WhatsApp Group
      </PrimaryButton>
    </Section>
  );
};
