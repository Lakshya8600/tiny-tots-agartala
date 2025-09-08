import { HeroSection } from '@/components/HeroSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { KarateGallery } from '@/components/KarateGallery';
import { ArtsGallery } from '@/components/ArtsGallery';
import { DrawingSection } from '@/components/DrawingSection';

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
      
      <TestimonialsSection />
      
      {/* Payment QR Code Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
              Easy Payments 💳
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
              Pay securely and instantly using our QR code payment system
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-card shadow-soft border-0 hover-glow animate-slide-up text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 hover-rainbow animate-wiggle">Scan & Pay</h3>
                
                {/* QR Code */}
                <div className="w-64 h-64 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse-glow hover-bounce p-6 shadow-lg">
                  <img 
                    src="/lovable-uploads/4f338747-0cec-4d76-9156-95a06f4fa983.png" 
                    alt="Payment QR Code - Scan to pay instantly" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <p className="text-muted-foreground mb-4 animate-fade-in">
                  Use any UPI app to scan this QR code for instant payment
                </p>
                
                <div className="space-y-3 text-sm text-muted-foreground animate-slide-up stagger-3">
                  <p className="flex items-center justify-center hover-bounce">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-glow"></span>
                    Google Pay, PhonePe, Paytm supported
                  </p>
                  <p className="flex items-center justify-center hover-bounce stagger-1">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-glow"></span>
                    Secure & instant payment processing
                  </p>
                  <p className="flex items-center justify-center hover-bounce stagger-2">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-glow"></span>
                    24/7 payment support available
                  </p>
                </div>

                <Button variant="playful" size="lg" className="w-full mt-6 hover-bounce animate-pulse-glow">
                  Need Help with Payment?
                </Button>
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
