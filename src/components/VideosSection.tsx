import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Video } from 'lucide-react';

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Daily Fun Activities",
      description: "Watch our kids enjoy painting, storytelling, and creative play!",
      thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Karate Class Highlights",
      description: "See our young martial artists in action learning discipline and focus.",
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      duration: "2:30"
    },
    {
      id: 3,
      title: "Art & Craft Time",
      description: "Creative minds at work! Watch our little artists create amazing projects.",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
      duration: "4:12"
    },
    {
      id: 4,
      title: "Story Time Magic",
      description: "Interactive storytelling sessions that spark imagination and wonder.",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      duration: "5:20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in hover-rainbow">
            Watch Us In Action! 📹
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-2">
            Get a glimpse into the joy, learning, and excitement at Tiny Tots Kids Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group bg-card shadow-soft border-0 hover-glow animate-slide-up hover-bounce overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-white/90 text-foreground hover:bg-white animate-pulse-glow hover-bounce"
                    >
                      <Play className="h-6 w-6 mr-2 animate-wiggle" />
                      Play Video
                    </Button>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm animate-float">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Video className="h-6 w-6 text-white animate-pulse-glow" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 hover-rainbow animate-wiggle">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground animate-fade-in">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="playful" size="lg" className="animate-pulse-glow hover-bounce">
            <Video className="h-5 w-5 mr-2 animate-wiggle" />
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export { VideosSection };