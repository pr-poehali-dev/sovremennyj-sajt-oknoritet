import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'ЖК "Современный"',
    type: 'Остекление квартиры',
    description: 'Полное остекление 3-комнатной квартиры с панорамными окнами',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/183e780e-6223-4b1f-bd86-a635a5de34be.jpg',
    tags: ['Окна', 'Балкон', '2024']
  },
  {
    title: 'Загородный дом',
    type: 'Окна и двери',
    description: 'Установка окон и входной двери в коттедже премиум-класса',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/79705572-f859-4b96-b29a-7a0edf515ba9.jpg',
    tags: ['Двери', 'Окна', '2024']
  },
  {
    title: 'ЖК "Новый горизонт"',
    type: 'Балконное остекление',
    description: 'Теплое остекление балкона с отделкой под ключ',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/2bed388b-3e96-4f42-82a7-f835c5eba108.jpg',
    tags: ['Балкон', 'Утепление', '2024']
  },
  {
    title: 'Офисное здание',
    type: 'Входная группа',
    description: 'Установка стеклянных дверей и витражей в бизнес-центре',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/79705572-f859-4b96-b29a-7a0edf515ba9.jpg',
    tags: ['Двери', 'Коммерция', '2023']
  },
  {
    title: 'Частный дом',
    type: 'Реконструкция',
    description: 'Замена всех окон в двухэтажном доме',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/183e780e-6223-4b1f-bd86-a635a5de34be.jpg',
    tags: ['Окна', 'Реконструкция', '2023']
  },
  {
    title: 'ЖК "Премиум"',
    type: 'Панорамное остекление',
    description: 'Установка больших панорамных окон с видом на город',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/2bed388b-3e96-4f42-82a7-f835c5eba108.jpg',
    tags: ['Окна', 'Панорама', '2023']
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">проекты</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 5000 успешно завершенных проектов за 15 лет работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{item.type}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
