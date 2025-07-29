import { Card, CardContent } from '@/components/ui/card';

const DrawingSection = () => {
  const drawings = [
    {
      id: 1,
      title: "Animal Friends",
      image: "https://images.unsplash.com/photo-1535268647677-300892687aa?w=400&h=300&fit=crop",
      artist: "Aarav, Age 5"
    },
    {
      id: 2,
      title: "My Family",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=300&fit=crop",
      artist: "Priya, Age 6"
    },
    {
      id: 3,
      title: "Happy Monkey",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop",
      artist: "Rohan, Age 4"
    },
    {
      id: 4,
      title: "Farm Animals",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=300&fit=crop",
      artist: "Ananya, Age 7"
    },
    {
      id: 5,
      title: "Safari Adventure",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop",
      artist: "Arjun, Age 6"
    },
    {
      id: 6,
      title: "Mountain View",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      artist: "Kavya, Age 5"
    },
    {
      id: 7,
      title: "Magical Forest",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      artist: "Dev, Age 8"
    },
    {
      id: 8,
      title: "Yummy Treats",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
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
                    {drawing.title}
                  </h3>
                  <p className="text-sm text-muted-foreground animate-fade-in">
                    By {drawing.artist}
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