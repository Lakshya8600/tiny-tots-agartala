import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import karateImage1 from '@/assets/karate-class-1.jpg';
import karateImage2 from '@/assets/karate-class-2.jpg';
import karateImage3 from '@/assets/karate-class-3.jpg';
import karateImage4 from '@/assets/karate-class-4.jpg';

const karateImages = [
  {
    src: karateImage1,
    title: "Basic Techniques Training",
    description: "Learning fundamental karate moves and stances"
  },
  {
    src: karateImage2,
    title: "Kata Practice",
    description: "Practicing traditional karate forms with focus"
  },
  {
    src: karateImage3,
    title: "Belt Ceremony",
    description: "Celebrating achievements and progress"
  },
  {
    src: karateImage4,
    title: "Sparring Practice",
    description: "Safe and controlled practice fights"
  }
];

export const KarateGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % karateImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % karateImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + karateImages.length) % karateImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Karate Classes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building discipline, confidence, and physical fitness through traditional martial arts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main slideshow */}
          <div className="relative overflow-hidden rounded-2xl shadow-soft bg-card">
            <div className="relative h-[400px] md:h-[500px]">
              {karateImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg opacity-90">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="karate"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="karate"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Play/Pause button */}
            <Button
              variant="karate"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {karateImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          {/* Karate program info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-4">Program Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Builds self-discipline and focus
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Improves physical fitness and coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Develops self-confidence and respect
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Safe, age-appropriate training methods
                </li>
              </ul>
            </div>

            {/* <div className="bg-card rounded-xl p-6 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-4">Class Schedule</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Ages 4-6:</span>
                  <span className="font-semibold">Mon/Wed 4:00-4:45 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Ages 7-9:</span>
                  <span className="font-semibold">Mon/Wed 5:00-5:45 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Ages 10+:</span>
                  <span className="font-semibold">Tue/Thu 4:30-5:30 PM</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="karate" className="w-full">
                    Join Karate Classes
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};