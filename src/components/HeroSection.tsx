import { Button } from '@/components/ui/button';
import { Heart, Star, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy children at Tiny Tots Kids Club"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
      </div>

      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Tiny Tots 
            <span className="text-primary-glow"> Kids Club</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 drop-shadow opacity-90">
            Where Little Dreams Take Flight in Agartala, Tripura
          </p>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80">
            A nurturing space for children to learn, play, and grow through engaging activities, 
            creative learning, and joyful friendships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="playful" size="xl" className="group">
              Join Our Club
              <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="fun" size="xl">
              Explore Activities
              <Star className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all ease-bounce-gentle">
              <Users className="h-12 w-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-lg opacity-90">Happy Kids</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all ease-bounce-gentle">
              <Star className="h-12 w-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">10+</h3>
              <p className="text-lg opacity-90">Fun Activities</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all ease-bounce-gentle">
              <Heart className="h-12 w-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">3+</h3>
              <p className="text-lg opacity-90">Years of Joy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};