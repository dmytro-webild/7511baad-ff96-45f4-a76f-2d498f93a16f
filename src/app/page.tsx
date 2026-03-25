"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Skills",
          id: "skills",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Your Name"
      bottomLeftText="Web Developer"
      bottomRightText="hello@yourdomain.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "glowing-orb",
      }}
      imagePosition="right"
      title="Hi, I’m a Web Developer"
      description="Crafting cutting-edge web experiences with a focus on performance, user-centric design, and seamless interactivity. Let's bring your ideas to life."
      kpis={[
        {
          value: "10+",
          label: "Years Experience",
        },
        {
          value: "50+",
          label: "Projects Completed",
        },
        {
          value: "99%",
          label: "Client Satisfaction",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "View Projects",
          href: "#projects",
        },
        {
          text: "Contact Me",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-web-developer-working-on-a-sleek-futur-1774455443927-7453eb11.png"
      imageAlt="Web developer working on futuristic code editor"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Passion for Digital Creation"
      description="With over a decade of experience in full-stack web development, I thrive on transforming complex ideas into elegant, high-performing digital solutions. My journey began with a curiosity for how websites work, evolving into a dedicated pursuit of mastering modern web technologies and delivering exceptional user experiences. I combine technical expertise with a keen eye for design, ensuring every project is not just functional, but also visually captivating."
      bulletPoints={[
        {
          title: "User-Centric Design",
          description: "Building intuitive and accessible interfaces that users love to interact with, focusing on seamless journeys.",
        },
        {
          title: "Performance Optimization",
          description: "Ensuring lightning-fast load times and smooth animations for a superior browsing experience.",
        },
        {
          title: "Scalable Architecture",
          description: "Developing robust and future-proof solutions designed to grow with your business needs.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-professional-and-friendly-portrait-of--1774455441842-bfda83c3.png"
      imageAlt="Professional portrait of a web developer"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="projects" data-section="projects">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "React, Node.js",
          title: "SaaS Dashboard",
          subtitle: "Interactive Analytics Platform",
          description: "Developed a full-stack SaaS dashboard for real-time data visualization and management, featuring custom charts and user roles.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/screenshot-of-a-modern-sleek-web-applica-1774455443466-f9c18193.png",
          imageAlt: "SaaS Dashboard Preview",
          buttons: [
            {
              text: "View Project",
              href: "#",
            },
          ],
        },
        {
          id: 2,
          tag: "Next.js, Tailwind CSS",
          title: "E-commerce Redesign",
          subtitle: "Modern Digital Storefront",
          description: "Led the redesign and development of a responsive e-commerce platform, enhancing performance and user experience with a modern aesthetic.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-user-interface-showing-a-responsive-e--1774455443128-df1dde35.png",
          imageAlt: "E-commerce Redesign Preview",
          buttons: [
            {
              text: "View Project",
              href: "#",
            },
          ],
        },
        {
          id: 3,
          tag: "Vue.js, Firebase",
          title: "Creative Portfolio",
          subtitle: "Interactive Showcase Site",
          description: "Built a dynamic portfolio site for creatives, featuring smooth animations, a custom CMS, and a unique project filtering system.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/preview-of-a-sophisticated-saas-landing--1774455443229-88378492.png",
          imageAlt: "Creative Portfolio Preview",
          buttons: [
            {
              text: "View Project",
              href: "#",
            },
          ],
        },
        {
          id: 4,
          tag: "TypeScript, GraphQL",
          title: "API Integration Platform",
          subtitle: "Seamless Data Connectivity",
          description: "Engineered a robust API integration platform, simplifying data exchange between various third-party services for enterprise clients.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/mockup-of-a-portfolio-website-for-a-crea-1774455442172-7a4f3ccd.png",
          imageAlt: "API Integration Platform Preview",
          buttons: [
            {
              text: "View Project",
              href: "#",
            },
          ],
        },
      ]}
      title="My Projects"
      description="Explore a selection of my latest work, showcasing diverse technologies and creative solutions. Each project reflects my commitment to quality, innovation, and client success."
    />
  </div>

  <div id="skills" data-section="skills">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="My Expertise"
      tag="Skills & Technologies"
      metrics={[
        {
          id: "frontend",
          value: "Frontend",
          description: "React, Next.js, Vue.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, SASS",
        },
        {
          id: "backend",
          value: "Backend",
          description: "Node.js, Express.js, Python, Django, RESTful APIs, GraphQL, PostgreSQL, MongoDB, Firebase",
        },
        {
          id: "tools",
          value: "Tools",
          description: "Git, GitHub, Docker, AWS, Netlify, Vercel, Webflow, Figma, Webpack, Babel",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Connect"
      title="Have a Project in Mind?"
      description="I'm always excited to collaborate on new and challenging projects. Whether you have a clear vision or need help brainstorming, feel free to reach out. Let's build something exceptional together."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-futuristic-digital-handshake-or-networ-1774455441255-987bd870.png"
      imageAlt="Futuristic digital handshake"
      mediaAnimation="slide-up"
      mediaPosition="left"
      inputPlaceholder="Your Email"
      buttonText="Send Message"
      termsText="By sending a message, you agree to my privacy policy and terms."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/an-abstract-dark-futuristic-background-f-1774455442151-bb521abc.png"
      imageAlt="Abstract futuristic tech background"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Projects",
              href: "#projects",
            },
            {
              label: "Skills",
              href: "#skills",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/yourprofile",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/yourprofile",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/yourprofile",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Your Name"
      copyrightText="© 2024 Your Name | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
