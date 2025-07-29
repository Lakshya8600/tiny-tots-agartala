import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      relation: "Mother of Aarav (5 years)",
      review: "Tiny Tots has been amazing for my son! He's learned so much discipline through karate and his creativity has flourished. The teachers are so caring and patient.",
      rating: 5,
      location: "GB Pant Road, Agartala"
    },
    {
      id: 2,
      name: "Rajesh Das",
      relation: "Father of Ananya (6 years)",
      review: "The art activities have brought out my daughter's hidden talents. She comes home excited every day with new stories and drawings. Highly recommended!",
      rating: 5,
      location: "Palace Compound, Agartala"
    },
    {
      id: 3,
      name: "Meera Chakraborty",
      relation: "Mother of Rohan (4 years)",
      review: "As a working mother, I'm so grateful for this club. My son has become more confident and social. The karate classes have improved his focus tremendously.",
      rating: 5,
      location: "Kunjaban, Agartala"
    },
    {
      id: 4,
      name: "Amit Debnath",
      relation: "Father of Kavya (7 years)",
      review: "The perfect blend of fun and learning! Kavya loves the storytelling sessions and has developed a real love for reading. The staff is wonderful.",
      rating: 5,
      location: "Bardowali, Agartala"
    },
    {
      id: 5,
      name: "Ritu Saha",
      relation: "Mother of Dev (8 years)",
      review: "Dev has been attending for 2 years now. His martial arts skills and artistic abilities have grown so much. It's like having the best of both worlds!",
      rating: 5,
      location: "Airport Road, Agartala"
    },
    {
      id: 6,
      name: "Sunil Roy",
      relation: "Father of Isha (4 years)",
      review: "The teachers treat each child with such love and care. Isha looks forward to every session. It's become the highlight of her week!",
      rating: 5,
      location: "Maharaja Ganga Singh Road, Agartala"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
            What Parents Say 💝
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            Don't just take our word for it - hear from the families who make our club special!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-card shadow-soft border-0 hover-glow animate-slide-up hover-bounce relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8 animate-float" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse-glow" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in">
                  "{testimonial.review}"
                </p>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-foreground hover-rainbow animate-wiggle">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {testimonial.relation}
                  </p>
                  <p className="text-xs text-muted-foreground/70 animate-float">
                    📍 {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground animate-float">
            🌟 Join our happy family of satisfied parents! 🌟
          </p>
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };