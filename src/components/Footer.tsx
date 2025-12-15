import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Окноритет</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Качественные окна и двери для вашего дома. Работаем с 2009 года.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Пластиковые окна</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Входные двери</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Остекление балконов</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Аксессуары</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                info@oknoritet.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                г. Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Окноритет. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
