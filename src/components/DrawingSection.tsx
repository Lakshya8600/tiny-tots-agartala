import { Card, CardContent } from '@/components/ui/card';
import drawing1 from '@/assets/drawing1.jpg';
import drawing2 from '@/assets/drawing2.jpg';
import drawing3 from '@/assets/drawing3.jpg';
import drawing4 from '@/assets/drawing4.jpg';
import drawing5 from '@/assets/drawing5.jpg';
import drawing6 from '@/assets/drawing6.jpg';
import drawing7 from '@/assets/drawing7.jpg';
import drawing8 from '@/assets/drawing8.jpg';

const DrawingSection = () => {
  const drawings = [
    {
      id: 1,
      title: "Drawings",
      image: drawing1,
      artist: "Aarav, Age 5"
    },
    {
      id: 2,
      title: "My Family",
      image: drawing2,
      artist: "Priya, Age 6"
    },
    {
      id: 3,
      title: "Focus",
      image: drawing3,
      artist: "Rohan, Age 4"
    },
    {
      id: 4,
      title: "Farm ",
      image: drawing4,
      artist: "Ananya, Age 7"
    },
    {
      id: 5,
      title: "Safari Adventure",
      image: drawing5,
      artist: "Arjun, Age 6"
    },
    {
      id: 6,
      title: "Mountain View",
      image:drawing6,
      artist: "Kavya, Age 5"
    },
    {
      id: 7,
      title: "Magical Forest",
      image: drawing7,
      artist: "Dev, Age 8"
    },
    {
      id: 8,
      title: "Yummy Treats",
      image:drawing8,
      artist: "Isha, Age 4"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
            Amazing Art Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            Look at the wonderful masterpieces created by our talented little artists! 🎨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drawings.map((drawing, index) => (
            <Card 
              key={drawing.id} 
              className="group bg-card shadow-soft border-0 hover-glow animate-slide-up hover-bounce overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={drawing.image} 
                    alt={drawing.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 animate-float"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2 hover-rainbow animate-wiggle">
                    {/* {drawing.title} */}
                  </h3>
                  <p className="text-sm text-muted-foreground animate-fade-in">
                    {/* By {drawing.artist} */}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground animate-float">
            ✨ Every child is an artist! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export { DrawingSection };