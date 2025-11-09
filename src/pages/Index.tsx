import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'ДРАКОНЫ',
    subtitle: 'Мифические существа в науке и культуре',
    type: 'title'
  },
  {
    id: 2,
    title: 'Виды драконов',
    content: [
      {
        name: 'Европейские драконы',
        description: 'Крылатые рептилии с четырьмя лапами, способные дышать огнём. Характерны для западной мифологии.'
      },
      {
        name: 'Восточные драконы',
        description: 'Длинные змееподобные существа без крыльев, символизирующие мудрость и удачу в азиатской культуре.'
      },
      {
        name: 'Морские драконы',
        description: 'Водные драконы с плавниками вместо крыльев, обитающие в океанах и крупных водоёмах.'
      },
      {
        name: 'Виверны',
        description: 'Двуногие драконы с крыльями, меньше классических драконов, но более агрессивные.'
      }
    ],
    type: 'content'
  },
  {
    id: 3,
    title: 'Мифология',
    content: [
      {
        name: 'Древняя Греция',
        description: 'Драконы как хранители сокровищ (Ладон, охранявший золотые яблоки Гесперид).'
      },
      {
        name: 'Скандинавия',
        description: 'Фафнир — карлик, превратившийся в дракона из-за проклятого золота. Символ алчности.'
      },
      {
        name: 'Китай',
        description: 'Лун — символ императорской власти, мудрости и доброй силы природы.'
      },
      {
        name: 'Япония',
        description: 'Рю — водные драконы, контролирующие дожди и морские стихии.'
      },
      {
        name: 'Славянская мифология',
        description: 'Змей Горыныч — трёхглавый огнедышащий дракон, противник богатырей.'
      }
    ],
    type: 'content'
  },
  {
    id: 4,
    title: 'Влияние на культуру',
    content: [
      {
        name: 'Литература',
        description: 'От "Беовульфа" до Дж. Р. Р. Толкина ("Хоббит") и Дж. Мартина ("Игра престолов").'
      },
      {
        name: 'Геральдика',
        description: 'Драконы на гербах символизируют силу, защиту и благородство (Уэльс, многие рыцарские роды).'
      },
      {
        name: 'Кинематограф',
        description: 'Визуальное воплощение драконов в фильмах создаёт культовые образы (Смауг, Беззубик, Дрогон).'
      },
      {
        name: 'Видеоигры',
        description: 'Драконы как боссы и союзники в RPG (The Elder Scrolls, Dragon Age, Monster Hunter).'
      },
      {
        name: 'Архитектура',
        description: 'Драконы в восточных храмах и европейских соборах как элементы декора и символы.'
      }
    ],
    type: 'content'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          {slide.type === 'title' ? (
            <div key={slide.id} className="text-center space-y-8 animate-fade-in">
              <div className="mb-12">
                <img 
                  src="https://cdn.poehali.dev/projects/72b62ab6-5b18-436a-b4bd-06404c2de3bb/files/3b4b44ee-d460-4f70-882b-6669fab2a445.jpg" 
                  alt="Dragon illustration" 
                  className="w-64 h-64 mx-auto object-cover rounded-lg opacity-90"
                />
              </div>
              <h1 className="text-8xl font-bold tracking-wider text-primary">
                {slide.title}
              </h1>
              <p className="text-3xl text-muted-foreground font-medium">
                {slide.subtitle}
              </p>
            </div>
          ) : (
            <div key={slide.id} className="space-y-8 animate-fade-in">
              <h2 className="text-6xl font-bold mb-12 text-primary">
                {slide.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slide.content?.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-primary flex items-center gap-3">
                      <Icon name="Sparkles" size={24} className="text-accent" />
                      {item.name}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="mb-4">
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex items-center justify-between">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          <div className="text-center mt-4 text-sm text-muted-foreground">
            Слайд {currentSlide + 1} из {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
