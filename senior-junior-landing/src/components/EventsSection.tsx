"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type EventItem = {
  title?: string;
  date?: string;
  description?: string;
  tag?: string;
};

interface Props {
  events?: EventItem[];
}

const Section = styled.section`
  padding: 5rem 10vw;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  border-radius: 1.25rem;
  padding: 1.8rem 2rem;
  background: radial-gradient(circle at top left, #111827, #020617);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.35);
  max-width: 520px;
`;

const Label = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.7;
`;

const EventTitle = styled.h3`
  font-size: 1.35rem;
  margin: 0.6rem 0;
`;

const DateText = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 0.6rem;
`;

const Desc = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
`;

export const EventsSection = ({ events = [] }: Props) => {
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

  const primaryEvent = events[0];

  if (!primaryEvent) {
    return (
      <Section id="events" ref={sectionRef}>
        <Heading>Events</Heading>
        <p>No events yet. Stay tuned.</p>
      </Section>
    );
  }

  return (
    <Section id="events" ref={sectionRef}>
      <Heading>Events</Heading>
      <Card>
        <Label>{primaryEvent.tag || "Event"}</Label>
        <EventTitle>{primaryEvent.title}</EventTitle>
        <DateText>{primaryEvent.date}</DateText>
        <Desc>{primaryEvent.description}</Desc>
      </Card>
    </Section>
  );
};
