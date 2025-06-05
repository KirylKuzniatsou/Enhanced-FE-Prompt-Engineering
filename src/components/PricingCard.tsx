import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  onSubscribe?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
  onSubscribe,
}) => {
  const cardBaseClasses = `
    flex flex-col
    shadow-lg overflow-hidden
    transition-all duration-300 ease-in-out
    w-full
    text-center
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500
    focus-visible:ring-offset-slate-900
  `;

  const featuredSpecificClasses = isFeatured
    ? 'bg-slate-800 text-white relative'
    : 'bg-white text-slate-800';

  const hoverClasses = `
    hover:shadow-2xl hover:z-10
    ${isFeatured
      ? 'sm:hover:scale-105'
      : 'sm:hover:-translate-y-1'
    }
  `;

  const overallCardVerticalPadding = isFeatured ? 'py-12 md:py-14' : 'py-6 md:py-8';

  const topSectionInternalPadding = 'p-8 md:p-8';
  const featureItemInternalPadding = 'px-6 py-3 md:py-3.5';
  const subscribeSectionInternalPadding = 'p-6 md:p-8';


  return (
    <button
      type="button"
      onClick={onSubscribe}
      className={`${cardBaseClasses} ${featuredSpecificClasses} ${hoverClasses} ${overallCardVerticalPadding}`}
      aria-label={`Subscribe to ${plan} plan`}
    >
      <div className={`${topSectionInternalPadding} ${isFeatured ? '' : 'border-b border-slate-100'}`}>
        <h2
          className={`font-semibold ${
            isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl text-slate-700'
          }`}
        >
          {plan}
        </h2>
        <p
          className={`my-2 md:my-3 font-bold ${
            isFeatured ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl text-slate-900'
          }`}
        >
          {price}
        </p>
      </div>

      <div
        className={`
          ${isFeatured ? 'bg-slate-800' : 'bg-white'}
          grow 
        `}
      >
        <ul className="list-none p-0 m-0">
          {features.map((feature, index) => (
            <li
              key={`${plan}-${feature}-${index}`}
              className={`
                ${featureItemInternalPadding} text-sm
                ${isFeatured
                  ? 'text-slate-100 border-b border-slate-400'
                  : 'text-slate-600 border-b border-slate-200'
                }
                ${index === 0 ? 'border-t' : ''}
              `}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`
          ${subscribeSectionInternalPadding} mt-auto
          text-sm font-semibold uppercase tracking-wider
          ${isFeatured ? 'text-slate-300' : 'text-slate-500'}
        `}
      >
        Subscribe
      </div>
    </button>
  );
};

export default PricingCard;
