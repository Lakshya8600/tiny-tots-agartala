import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Palette } from 'lucide-react';

const ArtsGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const artsImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      title: "Creative Painting Session",
      description: "Little artists exploring colors and creativity"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      title: "Clay Modeling Fun",
      description: "Shaping imagination with hands-on clay work"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
      title: "Colorful Art Projects",
      description: "Bringing ideas to life through art"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop",
      title: "Craft Time Magic",
      description: "Creating wonderful handmade treasures"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop",
      title: "Paper Art Creations",
      description: "Amazing origami and paper crafts"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1515887431348-3627d29ab9db?w=800&h=600&fit=crop",
      title: "Drawing Adventures",
      description: "Expressing stories through beautiful drawings"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      title: "Collaborative Art",
      description: "Working together on amazing group projects"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=800&h=600&fit=crop",
      title: "Masterpiece Gallery",
      description: "Showcasing our young artists' incredible work"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % artsImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + artsImages.length) % artsImages.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
            Arts & Crafts Gallery 🎨
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            Discover the magical world of creativity where our little artists bring their imagination to life!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card shadow-elegant border-0 hover-glow overflow-hidden animate-slide-up">
            <CardContent className="p-0">
              <div className="relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <img
                    src={artsImages[currentImage].url}
                    alt={artsImages[currentImage].title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Navigation Buttons */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover-bounce animate-float"
                  >
                    <ChevronLeft className="h-6 w-6 animate-wiggle" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover-bounce animate-float"
                    style={{animationDelay: '0.2s'}}
                  >
                    <ChevronRight className="h-6 w-6 animate-wiggle" />
                  </Button>

                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center mb-2">
                      <Palette className="h-6 w-6 mr-2 animate-pulse-glow" />
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full animate-float">
                        {currentImage + 1} of {artsImages.length}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 hover-rainbow animate-bounce-in">
                      {artsImages[currentImage].title}
                    </h3>
                    <p className="text-white/90 animate-slide-up">
                      {artsImages[currentImage].description}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="p-6 bg-card">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {artsImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 hover-bounce animate-slide-up ${
                          index === currentImage 
                            ? 'border-primary shadow-glow' 
                            : 'border-transparent hover:border-primary/50'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Stats */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center animate-float">
                <Palette className="h-5 w-5 mr-2 animate-pulse-glow" />
                <span>8 Amazing Projects</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="animate-fade-in">
                <span>✨ Creative Minds at Work ✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ArtsGallery };