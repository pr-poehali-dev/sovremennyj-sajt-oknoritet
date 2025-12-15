import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">с нами</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами для бесплатной консультации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (473) 280-11-55</p>
                    <p className="text-sm text-muted-foreground mt-1">Понедельник-пятница с 8:00 до 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@oknoritet.ru</p>
                    <p className="text-muted-foreground">sales@oknoritet.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Воронеж, ул. Новосибирская, д. 13а, оф. 13</p>
                    <p className="text-sm text-muted-foreground mt-1">Понедельник-пятница: 8:00-17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Мы в социальных сетях</h3>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="border-2"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-2"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="border-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;