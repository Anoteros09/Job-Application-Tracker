import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient text-primary-text p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-primary-text mb-4">
          Job Application Tracker
        </h1>
        <p className="text-lg text-secondary-text mb-6">
          A simple and efficient way to track your job applications. Stay
          organized, monitor your progress, and never miss an opportunity.
        </p>
        <div className="bg-secondary p-6 rounded-lg shadow-lg text-left">
          <h2 className="text-2xl font-semibold text-primary-text mb-2">
            Why use this app?
          </h2>
          <ul className="list-disc list-inside text-secondary-text space-y-2">
            <li>Built with Next.js for fast and scalable performance</li>
            <li>Styled with Tailwind CSS for a modern and responsive UI</li>
            <li>Track application statuses with an intuitive dashboard</li>
            <li>Store and manage job details effortlessly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
