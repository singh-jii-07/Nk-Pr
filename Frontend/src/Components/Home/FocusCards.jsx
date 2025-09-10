import { FocusCards } from "../ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Event Management",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Press Coverage",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Social Media Campaign",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Public Relations",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product Launch",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Brand Promotion",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return(
     <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Work in <span className="text-yellow-500">Action</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A glimpse of the impactful moments we've created for our clients.
          </p>
        </div>

        
        <FocusCards cards={cards} />
      </div>
    </section>

  )
}
