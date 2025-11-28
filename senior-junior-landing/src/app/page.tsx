"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

const PageWrapper = styled.main`
  min-height: 100vh;
  background: radial-gradient(circle at top, #111827 0, #05060a 50%);
`;

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

type HomepageData = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroHint?: string;
  whatsappLink?: string;
  aboutTitle?: string;
  aboutText?: string;
};

type EventItem = {
  id?: number;
  documentId?: string;
  title?: string;
  date?: string;
  description?: string;
  tag?: string;
};

export default function Home() {
  const [homepage, setHomepage] = useState<HomepageData | undefined>();
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homepageRes, eventsRes] = await Promise.all([
          fetch(`${STRAPI_URL}/api/homepage`),
          fetch(`${STRAPI_URL}/api/events`),
        ]);

        const homepageJson = await homepageRes.json();
        const eventsJson = await eventsRes.json();

        // Strapi v5: data fields are flat (no attributes)
        setHomepage(
          homepageJson.data?.attributes || homepageJson.data || {}
        );
        setEvents(eventsJson.data || []);
      } catch (err) {
        console.error("Error fetching data from Strapi:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <HeroSection homepage={homepage} />
      <AboutSection homepage={homepage} />
      <EventsSection events={events} />
      <GallerySection />
      <ContactSection whatsappLink={homepage?.whatsappLink} />
    </PageWrapper>
  );
}
