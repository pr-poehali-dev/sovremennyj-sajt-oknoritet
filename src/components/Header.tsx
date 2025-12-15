import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Окноритет
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Заказать звонок
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full">
              Заказать звонок
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
