import React from "react";
import cleaner from "../../../Assets/cleaner.png";
import painter from "../../../Assets/painter.jpg";
import plumber from "../../../Assets/plumber.png";
import worker from "../../../Assets/worker.png";
const Feature = () => {
  const features = [
    {
      name: "Designer",
      description:
        "We have the best designer to help you design and make plan for your home.",
    },
    {
      name: "Cleaner",
      description:
        "You got messed up? Dont worry. Our cleaner team is here for you.",
    },
    {
      name: "Painter",
      description: `Don't like the color of your home? Just book and wait for our painter to arrive soon.`,
    },
    {
      name: "Architect",
      description:
        "Need an architect for the dream home? we have the best waiting for you.",
    },
    { name: "Plumber", description: "Need someone to fix plumbing issue?" },
    {
      name: "Furniture Assembly",
      description: "Got furniture at your door but don't know how to set up?.",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Our Best Services
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            We provide the best home service. That includes designing, cleaning,
            rebuilding and so more. You can just call us or hire someone using
            our app or website. All your works for home is one click away.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 dark:text-gray-200">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm text-gray-500 dark:text-gray-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={cleaner}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={plumber}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={painter}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src={worker}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
