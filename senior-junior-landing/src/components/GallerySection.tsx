"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 5rem 10vw;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  max-width: 600px;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

const Placeholder = styled.div`
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  background: radial-gradient(circle at top left, #1f2937, #020617);
  border: 1px dashed rgba(148, 163, 184, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const GallerySection = () => {
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

  return (
    <Section id="gallery" ref={sectionRef}>
      <Heading>Gallery</Heading>
      <Text>
        Soon this space will be filled with photos from our meetups workshops and
        events. Stay tuned.
      </Text>
      <Grid>
        <Placeholder>Coming soon</Placeholder>
        <Placeholder>Coming soon</Placeholder>
        <Placeholder>Coming soon</Placeholder>
        <Placeholder>Coming soon</Placeholder>
      </Grid>
    </Section>
  );
};
