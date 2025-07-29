import { HeroSection } from '@/components/HeroSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { KarateGallery } from '@/components/KarateGallery';
import { ArtsGallery } from '@/components/ArtsGallery';
import { DrawingSection } from '@/components/DrawingSection';
import { VideosSection } from '@/components/VideosSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ActivitiesSection />
      <KarateGallery />
      <ArtsGallery />
      <DrawingSection />
      <VideosSection />
      <TestimonialsSection />
      
      {/* Contact Section with animations */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
              Visit Us in Agartala
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
              Come see where the magic happens! We'd love to meet you and your little one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-card shadow-soft border-0 hover-glow animate-slide-up stagger-3">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 hover-rainbow">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover-bounce">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4 animate-float animate-pulse-glow">
                      <MapPin className="h-6 w-6 text-white animate-wiggle" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Agartala, Tripura</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center hover-bounce stagger-1">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4 animate-float animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                      <Phone className="h-6 w-6 text-white animate-wiggle" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">Call for more info</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center hover-bounce stagger-2">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4 animate-float animate-pulse-glow" style={{animationDelay: '1s'}}>
                      <Mail className="h-6 w-6 text-white animate-spin-slow" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@tinytotsclub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center hover-bounce stagger-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4 animate-float animate-pulse-glow" style={{animationDelay: '1.5s'}}>
                      <Clock className="h-6 w-6 text-white animate-tada" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft border-0 hover-glow animate-slide-up stagger-4">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 hover-rainbow animate-wiggle">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6 animate-fade-in stagger-5">
                  Join our wonderful community of families in Agartala. Your child's journey 
                  of learning, growth, and joy begins here at Tiny Tots Kids Club!
                </p>
                <div className="space-y-4">
                  <Button variant="playful" size="lg" className="w-full hover-bounce animate-pulse-glow">
                    Schedule a Visit
                  </Button>
                  <Button variant="outline" size="lg" className="w-full hover:bg-primary hover:text-primary-foreground hover-wiggle">
                    Call Us Today
                  </Button>
                  <p className="text-sm text-muted-foreground text-center animate-float">
                    Ages 3-12 welcome • Flexible schedules available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with playful animations */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 hover-rainbow animate-bounce-in">Tiny Tots Kids Club</h3>
          <p className="text-background/80 mb-4 animate-slide-up stagger-1">
            Nurturing young minds in Agartala, Tripura since 2021
          </p>
          <p className="text-background/60 text-sm animate-float">
            Made with ❤️ for the children of Agartala
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
