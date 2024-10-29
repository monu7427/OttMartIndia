import React, { useState } from 'react';
import { TruckIcon, StarIcon, ShieldCheckIcon, BadgeCheckIcon } from '@heroicons/react/solid';

const features = [
  {
    name: 'Exclusive Content',
    description: 'Discover a curated collection of exclusive content available only on our OTT platform.',
    icon: StarIcon,
  },
  {
    name: 'High-Quality Streaming',
    description: 'Experience high-definition streaming with our state-of-the-art technology infrastructure.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fast Activation',
    description: 'Get instant access to your favorite shows and movies with our fast activation process.',
    icon: TruckIcon,
  },
  {
    name: 'Trusted Platform',
    description: 'Join millions of satisfied users who trust our platform for their entertainment needs.',
    icon: BadgeCheckIcon,
  },
];

const Feature = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCompletePayment = () => {
    setPaymentCompleted(true);
  };

  return (
    <div className="bg-gradient-to-r from-orange-600 to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-white p-9 rounded-lg shadow-lg lg:text-center text-black">
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Elevate Your Entertainment Experience with Our OTT Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Immerse yourself in a world of entertainment with our OTT platform. From exclusive content to high-quality streaming, we have everything you need for an unparalleled viewing experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-6 bg-black rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                <dt className="text-lg font-bold leading-7 text-orange-500 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 mr-4">
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
