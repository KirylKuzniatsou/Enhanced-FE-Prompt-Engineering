import React from 'react';
import PricingCard from './components/PricingCard';
import './App.css';

function App() {
  const pricingPlans = [
    {
      plan: 'Standard',
      price: '$100',
      features: ['50,000 Requests', '4 contributors', 'Up to 3 GB storage space'],
      isFeatured: false,
    },
    {
      plan: 'Pro',
      price: '$200',
      features: ['100,000 Requests', '7 contributors', 'Up to 6 GB storage space'],
      isFeatured: true,
    },
    {
      plan: 'Expert',
      price: '$500',
      features: ['200,000 Requests', '11 contributors', 'Up to 10 GB storage space'],
      isFeatured: false,
    },
  ];

  const handleSubscribe = (planName: string) => {
    console.log(`Subscribed to ${planName} plan!`);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
        Pricing
      </h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-center w-full max-w-5xl gap-y-6 ">
        {pricingPlans.map((planData) => (
          <div 
            key={planData.plan} 
            className="flex flex-col sm:w-1/3" 
          >
            <PricingCard
              plan={planData.plan}
              price={planData.price}
              features={planData.features}
              isFeatured={planData.isFeatured}
              onSubscribe={() => handleSubscribe(planData.plan)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
