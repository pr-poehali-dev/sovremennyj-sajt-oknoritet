import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const products = [
  {
    title: 'Пластиковые окна',
    description: 'Энергоэффективные окна из профиля премиум-класса с многокамерным стеклопакетом',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/183e780e-6223-4b1f-bd86-a635a5de34be.jpg',
    features: ['7-камерный профиль', 'Двухкамерный стеклопакет', 'Шумоизоляция до 42 дБ', 'Гарантия 10 лет'],
    price: 'от 12 000 ₽',
    icon: 'Square'
  },
  {
    title: 'Входные двери',
    description: 'Надежные двери с современными системами безопасности и стильным дизайном',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/79705572-f859-4b96-b29a-7a0edf515ba9.jpg',
    features: ['3 контура уплотнения', 'Замки повышенной надежности', 'Терморазрыв', 'Гарантия 5 лет'],
    price: 'от 35 000 ₽',
    icon: 'Door'
  },
  {
    title: 'Остекление балконов',
    description: 'Полное остекление балконов и лоджий с утеплением под ключ',
    image: 'https://cdn.poehali.dev/projects/26190585-e5cb-4077-a217-1c3d3ca08ce2/files/2bed388b-3e96-4f42-82a7-f835c5eba108.jpg',
    features: ['Безрамное остекление', 'Утепление стен', 'Отделка под ключ', 'Монтаж за 1 день'],
    price: 'от 25 000 ₽',
    icon: 'Building'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наша <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">продукция</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор качественных окон и дверей для вашего дома
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                  {product.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name={product.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
