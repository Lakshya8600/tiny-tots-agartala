import { HeroSection } from '@/components/HeroSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { KarateGallery } from '@/components/KarateGallery';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ActivitiesSection />
      <KarateGallery />
      
      {/* Contact Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visit Us in Agartala
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Come see where the magic happens! We'd love to meet you and your little one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-card shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Agartala, Tripura</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">Call for more info</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@tinytotsclub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our wonderful community of families in Agartala. Your child's journey 
                  of learning, growth, and joy begins here at Tiny Tots Kids Club!
                </p>
                <div className="space-y-4">
                  <Button variant="playful" size="lg" className="w-full">
                    Schedule a Visit
                  </Button>
                  <Button variant="outline" size="lg" className="w-full hover:bg-primary hover:text-primary-foreground">
                    Call Us Today
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Ages 3-12 welcome • Flexible schedules available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Tiny Tots Kids Club</h3>
          <p className="text-background/80 mb-4">
            Nurturing young minds in Agartala, Tripura since 2021
          </p>
          <p className="text-background/60 text-sm">
            Made with ❤️ for the children of Agartala
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
