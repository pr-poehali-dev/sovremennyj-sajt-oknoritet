import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Окна и двери{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                премиум-класса
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Современные решения для вашего комфорта. Энергоэффективность, надежность и стиль в каждом изделии.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">гарантия качества</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/183e780e-6223-4b1f-bd86-a635a5de34be.jpg"
              alt="Современные окна"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
