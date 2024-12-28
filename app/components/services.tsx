import React from "react";

export default function Services() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-medium tracking-tight">Our Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Software Development",
          "Landing page",
          "E-commerce",
          "Software",
          "Maintenance",
          "AI Chatbot",
          "AI/ML Solutions",
          "SEO Optimization",
          "Digital Marketing",
        ].map((service) => (
          <div key={service} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg h-32">
            <h2 className="capitalize">{service}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
