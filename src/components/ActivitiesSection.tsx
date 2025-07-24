import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Palette, 
  Music, 
  BookOpen, 
  Gamepad2, 
  Users, 
  Heart,
  Zap,
  Trophy,
  Sparkles
} from 'lucide-react';

const activities = [
  {
    icon: Palette,
    title: "Arts & Crafts",
    description: "Creative expression through painting, drawing, and hands-on crafts that develop fine motor skills and imagination.",
    color: "from-pink-400 to-purple-500"
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Rhythm, melody, and movement classes that build coordination, confidence, and a love for the arts.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Interactive story sessions that enhance language skills, creativity, and ignite a passion for reading.",
    color: "from-green-400 to-teal-500"
  },
  {
    icon: Gamepad2,
    title: "Educational Games",
    description: "Fun learning activities that develop problem-solving skills, teamwork, and critical thinking.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Users,
    title: "Social Skills",
    description: "Group activities focused on building friendships, communication, and emotional intelligence.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Zap,
    title: "Physical Activities",
    description: "Age-appropriate exercises, games, and sports that promote healthy development and coordination.",
    color: "from-yellow-400 to-orange-500"
  }
];

export const ActivitiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 animate-bounce-in animate-pulse-glow">
            <Sparkles className="h-8 w-8 text-white animate-spin-slow animate-wiggle" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
            Fun-Filled Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up stagger-2">
            Every day brings new adventures and learning opportunities designed to nurture your child's 
            growth, creativity, and happiness in a safe, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-soft hover:shadow-primary transform hover:scale-105 transition-all duration-300 ease-bounce-gentle bg-card animate-slide-up hover-glow hover-bounce"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${activity.color} rounded-xl mb-4 group-hover:scale-110 transition-transform animate-float animate-pulse-glow hover-wiggle`}
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <activity.icon className="h-6 w-6 text-white animate-tada" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors hover-rainbow">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action with enhanced animations */}
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-soft animate-bounce-in hover-glow">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-full mb-6 animate-float animate-pulse-glow">
              <Trophy className="h-10 w-10 text-white animate-wiggle animate-spin-slow" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover-rainbow animate-tada">
              Ready to Join the Fun?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up stagger-2">
              Give your child the gift of joyful learning, new friendships, and countless 
              memories at Tiny Tots Kids Club in Agartala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
              <Button variant="playful" size="xl" className="group hover-bounce animate-pulse-glow">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform animate-wiggle" />
                Enroll Your Child
              </Button>
              <Button variant="outline" size="xl" className="hover:bg-primary hover:text-primary-foreground hover-wiggle">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};