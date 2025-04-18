export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-6">
            Welcome to TravelEase, your trusted partner in creating unforgettable travel experiences. 
            With years of expertise in the travel industry, we specialize in crafting personalized 
            journeys that cater to your unique preferences and desires.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            To provide exceptional travel experiences that inspire, educate, and connect people 
            across cultures while maintaining the highest standards of customer service and 
            sustainable tourism practices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>Expertly curated travel packages</li>
            <li>24/7 customer support</li>
            <li>Best price guarantee</li>
            <li>Personalized travel planning</li>
            <li>Secure and convenient booking process</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p className="text-muted-foreground mb-6">
            We are committed to sustainable tourism and work closely with local communities 
            to ensure our travel packages benefit both our customers and the destinations 
            they visit. Our partnerships with trusted service providers ensure you receive 
            the highest quality experience at competitive prices.
          </p>
        </div>
      </div>
    </div>
  );
}