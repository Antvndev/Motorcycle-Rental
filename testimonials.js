const testimonials = [
    {
      name: "Sarah K.",
      key: "sarah",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 4,
      testimonial: "Rented it for a weekend ride—handled like a dream on the curves! It was very easy and relaxing to ride this bike."
    },
    {
      name: "Michael L.",
      key: "michael",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 4,
      testimonial: "Took it along the coast—smooth ride, no issues, overall an unforgettable trip."
    },
    {
      name: "Lauren M.",
      key: "lauren",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5,
      testimonial: "Best rental experience ever. The bike was clean, fast, and very fun to ride!"
    }
  ];
  
  const starSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
  `;
  
  function createTestimonialCard(testimonial, bikeModel) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
  
    const img = document.createElement('img');
    img.src = testimonial.image;
    img.alt = testimonial.name;
    img.className = 'testimonial-image';
  
    const name = document.createElement('h3');
    name.className = 'testimonial-name';
    name.textContent = testimonial.name;
  
    const bikeInfo = document.createElement('p');
    bikeInfo.className = 'testimonial-bike';
    bikeInfo.textContent = `Bought: ${bikeModel}`;
  
    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = `"${testimonial.testimonial}"`;
  
    const rating = document.createElement('div');
    rating.className = 'rating';
  
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('div');
      star.className = `star ${i < testimonial.rating ? 'filled' : 'empty'}`;
      star.innerHTML = starSVG;
      rating.appendChild(star);
    }
  
    card.append(img, name, bikeInfo, text, rating);
    return card;
  }
  
  async function initTestimonials() {
    try {
      const res = await fetch('testimonials-bikes.json');
      const bikeMap = await res.json();
  
      const container = document.querySelector('.testimonials-grid');
      testimonials.forEach(testimonial => {
        const model = bikeMap[testimonial.key] || 'Unknown model';
        const card = createTestimonialCard(testimonial, model);
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Failed to load testimonial-bikes.json', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', initTestimonials);