import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard 
          id="1"
          name="Math Companion"
          topic="Algebra Basics"
          subject="Mathematics"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
        <CompanionCard 
          id="1"
          name="Math Companion"
          topic="Algebra Basics"
          subject="Mathematics"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
        <CompanionCard 
          id="1"
          name="Math Companion"
          topic="Algebra Basics"
          subject="Mathematics"
          duration={30}
          color="#f0f0f0"
          bookmarked={false}
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
