export default function PricingTable() {
    const plans = [
      { title: "Ad-Supported", price: "$9.99/mo", features: ["1080p Streaming", "Ads Included"] },
      { title: "Standard", price: "$15.99/mo", features: ["4K Streaming", "No Ads", "Download & Watch Offline"] },
      { title: "Premium", price: "$19.99/mo", features: ["4K HDR", "Dolby Atmos", "Live HBO Channels"] },
    ];
  
    return (
      <div className="row pricing-table">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 pricing-card">
            <h3>{plan.title}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Subscribe Now</button>
          </div>
        ))}
      </div>
    );
  }
  