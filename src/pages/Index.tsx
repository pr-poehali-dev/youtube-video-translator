import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTranslate = () => {
    if (!url) return;
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0B0F] via-[#0F1119] to-[#0A0B0F] text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#1EAEDB] flex items-center justify-center">
              <Icon name="Video" size={20} />
            </div>
            <span className="text-xl font-bold">TranslateVideo</span>
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="text-sm hover:text-[#8B5CF6] transition-colors">Главная</a>
            <a href="#how" className="text-sm hover:text-[#8B5CF6] transition-colors">Как работает</a>
            <a href="#faq" className="text-sm hover:text-[#8B5CF6] transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#1EAEDB] animate-pulse"></div>
            <span className="text-sm text-white/70">Powered by AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Переводите YouTube видео
            <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#1EAEDB] to-[#8B5CF6] bg-clip-text text-transparent">
              на любой язык
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Субтитры, озвучка и экспорт в разных форматах. Без ограничений по длине видео.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mt-8">
            <Input
              type="text"
              placeholder="Вставьте ссылку на YouTube видео..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#8B5CF6] transition-all"
            />
            <Button
              onClick={handleTranslate}
              disabled={!url || isProcessing}
              className="h-14 px-8 bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB] hover:opacity-90 transition-opacity"
            >
              {isProcessing ? (
                <Icon name="Loader2" size={20} className="animate-spin" />
              ) : (
                <>
                  <Icon name="Play" size={20} />
                  <span className="ml-2">Перевести</span>
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: 'Globe', label: 'Все языки', desc: 'Поддержка 100+ языков' },
              { icon: 'Subtitles', label: 'Субтитры', desc: 'Генерация и перевод' },
              { icon: 'Download', label: 'Экспорт', desc: 'MP4, SRT, VTT' },
              { icon: 'Infinity', label: 'Без лимитов', desc: 'Любая длина видео' }
            ].map((feature, i) => (
              <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[#8B5CF6]/20 to-[#1EAEDB]/20 flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-[#8B5CF6]" />
                  </div>
                  <h3 className="font-semibold">{feature.label}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Как это работает
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: '01',
                icon: 'Link',
                title: 'Вставьте ссылку',
                desc: 'Скопируйте URL любого YouTube видео и вставьте в поле ввода'
              },
              {
                step: '02',
                icon: 'Sparkles',
                title: 'AI обработает видео',
                desc: 'Наша нейросеть извлечёт аудио, распознает речь и переведёт на выбранный язык'
              },
              {
                step: '03',
                icon: 'Languages',
                title: 'Выберите язык',
                desc: 'Доступно более 100 языков для перевода субтитров и озвучки'
              },
              {
                step: '04',
                icon: 'Download',
                title: 'Скачайте результат',
                desc: 'Экспортируйте видео с субтитрами в форматах MP4, SRT или VTT'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#1EAEDB] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={step.icon} size={28} />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-[#8B5CF6]">{step.step}</span>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Есть ли ограничения по длине видео?',
                a: 'Нет, вы можете переводить видео любой длительности — от коротких роликов до многочасовых лекций.'
              },
              {
                q: 'Какие языки поддерживаются?',
                a: 'Мы поддерживаем более 100 языков, включая русский, английский, испанский, китайский, арабский и многие другие.'
              },
              {
                q: 'В каких форматах можно экспортировать?',
                a: 'Доступен экспорт видео с вшитыми субтитрами (MP4), отдельных файлов субтитров (SRT, VTT) и аудиодорожек.'
              },
              {
                q: 'Как быстро обрабатывается видео?',
                a: 'Скорость обработки зависит от длины видео. В среднем 10-минутное видео обрабатывается за 2-3 минуты.'
              },
              {
                q: 'Можно ли редактировать субтитры?',
                a: 'Да, после генерации вы можете отредактировать текст субтитров перед экспортом для большей точности.'
              },
              {
                q: 'Сохраняется ли качество видео?',
                a: 'Мы сохраняем оригинальное качество видео. При экспорте можно выбрать разрешение от 480p до 4K.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/5 border border-white/10 rounded-lg px-6 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline hover:text-[#8B5CF6] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-white/40">
          <p>&copy; 2025 TranslateVideo. Сделано с использованием AI технологий</p>
        </div>
      </footer>
    </div>
  );
}
