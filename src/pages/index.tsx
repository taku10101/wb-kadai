import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Carousel, CarouselSlide } from "@yamada-ui/carousel";
import { Center } from "@yamada-ui/react";
export default function Component() {
  const [activeField, setActiveField] = useState("game");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ゲームから未来まで",
      content: "本気になった人間を世界はほっとかない。",
      image: "/02_slider/carousel_general_HAL_pc_2024_1024.jpg",
    },
    {
      title: "クリエイティブな未来へ",
      content: "想像力を現実に変える力を身につけよう。",
      image: "/02_slider/img_naiteisokuhou_2024_NH__1.jpg",
    },
    {
      title: "テクノロジーの最前線",
      content: "最新技術で、新しい世界を創造しよう。",
      image: "/02_slider/PC.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const fields: { id: string; name: string }[] = [
    { id: "game", name: "ゲーム分野" },
    { id: "cg", name: "CG・映像分野" },
    { id: "music", name: "音声分野" },
    { id: "design", name: "カーデザイン分野" },
    { id: "it", name: "IT・WEB・AI分野" },
  ];

  const fieldContent: Record<string, { title: string; description: string, image:string[] }> = {
    game: {
      title: "ゲーム開発コース",
      description:
        "最新のゲーム開発技術を学び、クリエイティブな作品を生み出すスキルを身につけます。",
      image:["/08_Courses/01_GAME/areatop_course_game_design.jpg","/08_Courses/01_GAME/areatop_course_game_make.jpg","/08_Courses/01_GAME/areatop_course_game_planning.jpg"]
    },
    cg: {
      title: "CG・映像制作コース",
      description:
        "3DCGや映像編集の技術を習得し、映画やアニメーションの世界で活躍できる人材を育成します。",
      image:["/08_Courses/02_CG:ANIMATION/areatop_course_anime_illust.jpg","/08_Courses/02_CG:ANIMATION/areatop_course_cg_design.jpg","/08_Courses/02_CG:ANIMATION/areatop_course_cg_movie.jpg","/08_Courses/02_CG:ANIMATION/areatop_course_night_cg.jpg","/08_Courses/02_CG:ANIMATION/areatop_course_night_graphic.png","/08_Courses/02_CG:ANIMATION/areatop_course_twoyear_cg.jpg"]
    },
    music: {
      title: "音楽・サウンド制作コース",
      description:
        "作曲や音響効果の制作技術を学び、様々なメディアで使用される音楽やサウンドを生み出します。",
        image:["/08_Courses/03_MUSIC/areatop_course_music.jpg", "/08_Courses/03_MUSIC/areatop_course_twoyear_music.jpg"]
    },
    design: {
      title: "カーデザインコース",
      description:
        "自動車業界で求められるデザインスキルと最新のCAD技術を習得し、未来の車を創造します。",
        image:["/08_Courses/04_CAR DESIGN/areatop_course_car_design.jpg"]
    },
    it: {
      title: "IT・WEB・AI開発コース",
      description:
        "プログラミングやAI技術を学び、最先端のIT産業で活躍できるエンジニアを育成します。",
        image:["/08_Courses/05_IT:WEB:AI/areatop_course_ai.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_info_manage.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_info_process.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_night_it.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_night_system.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_night_web.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_twoyear_internet.jpg", "/08_Courses/05_IT:WEB:AI/areatop_course_web_dev.png" ]
    },
  };

  return (
    <div className='flex min-h-screen flex-col bg-amber-50'>
      {/* Header */}
      <header className='border-b bg-amber-100/80 backdrop-blur-sm sticky top-0 z-50 opacity-80'>
        <div className='flex h-16 items-center justify-between'>
          <Image
            src='/01_header/header_logo_all.svg'
            alt='HAL College Logo'
            height={50}
            width={150}
            className='dark:invert'
            style={{margin:"0 20px"}}
          />
          <nav className='flex gap-2'>
            {["English", "简体中文", "繁體中文", "한국어", "Tiếng Việt"].map(
              (lang) => (
                <Button
                  key={lang}
                  variant='ghost'
                  size='sm'
                  className='text-xs text-amber-900'
                >
                  {lang}
                </Button>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow'>
        {/* Hero Section with Slideshow */}
        <section className='relative overflow-hidden bg-gradient-to-b from-amber-200 to-amber-100 h-[1000px]'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover mask-image-gradient'
                />
              <div className='relative z-20 h-full flex items-center justify-center'>
                <div className='text-center space-y-6 max-w-2xl mx-auto px-4'>
                  <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>
                    {slide.title}
                  </h1>
                  <p className='text-xl text-amber-100 max-w-[600px] mx-auto'>
                    {slide.content}
                  </p>
									<Link href={"#campus"}>
                  <Button
                    size='lg'
                    className='rounded-full bg-amber-600 text-white hover:bg-amber-700'
                  >
                    希望する学校を選択しよう
                    <ChevronRight className='ml-2 h-4 w-4' />
                  </Button>
									</Link>
		            </div>
              </div>
            </div>
          ))}
        </section>

        {/* Campus Selection */}
        <section id="campus" className='py-24 bg-amber-100 '>
          <div className='container m-auto'>
            <h2 className='text-3xl font-bold text-center mb-12 text-amber-900'>
              キャンパス選択
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  city: "TOKYO",
                  station: "新宿(西口)駅前",
                  time: "徒歩3分",
                  details: "地上10階 総合校舎3つのタワー",
                  image:"/12_others/halTokyo.webp",
									link:"https://www.hal.ac.jp/tokyo"
                },
                {
                  city: "OSAKA",
                  station: "大阪(梅田)駅前",
                  time: "徒歩2分",
                  details: "地上21階 HAL大阪総合校舎",
                  image:"/12_others/halOsaka.webp",
									link:"https://www.hal.ac.jp/osaka"
                },
                {
                  city: "NAGOYA",
                  station: "名古屋駅前",
                  time: "徒歩3分",
                  details: "地上30階 総合校舎スパイラルタワーズ",
                  image:"/12_others/halNagoya.webp",
									link:"https://www.hal.ac.jp/nagoya"
                },
                {
                  city: "PARIS",
                  station: "グランブルバール",
                  time: "GIAL-HAL校",
                  details: "HALとGIAL教育提携ならでは！",
                  image:"/12_others/halParis.webp",
									link:"https://www.hal.ac.jp/paris"
                },
              ].map((campus) => (
                <Card
                  key={campus.city}
                  className='overflow-hidden group bg-white'
                >
                  <CardContent className='p-6 space-y-4'>
                    <h3 className='text-2xl font-bold text-amber-800'>
                      {campus.city}
                    </h3>
                    <Image
                      src={campus.image}
                      alt="Out"
                      width={500}
                      height={50}
                      />
                    <div className='space-y-2'>
                      <div className='flex items-center gap-2 text-amber-700'>
                        <MapPin className='w-4 h-4' />
                        <span className='text-sm'>{campus.station}</span>
                      </div>
                      <div className='flex items-center gap-2 text-amber-700'>
                        <Clock className='w-4 h-4' />
                        <span className='text-sm'>{campus.time}</span>
                      </div>
                      <p className='text-sm text-amber-600'>{campus.details}</p>
                    </div>
										
											<Button
												className='w-full bg-amber-500 text-white hover:bg-amber-600'
												variant='outline'
											>
												<Link href={campus.link}>
												サイトを見る
												</Link>
											</Button>
										
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className='py-24'>
          <div className='container space-y-12 m-auto'>
            <div className='text-center space-y-4 max-w-3xl mx-auto'>
              <h2 className='text-3xl font-bold text-amber-900'>
                プロを、約束する学校。
              </h2>
              <p className='text-amber-800 text-lg'>
                ゲーム、CG映像、グラフィック/アニメ、イラスト、ミュージック、カーデザイン、IT、WEB、AI・・・夢の最前線がそのまま
                教室に凝縮。独自の就職支援システムで希望者就職率は100%
              </p>
            </div>

            <div className='space-y-8'>
              <div className='flex flex-wrap justify-center gap-4'>
                {fields.map((field) => (
                  
                  <Button
                    key={field.id}
                    onClick={() => setActiveField(field.id)}
                    variant={activeField === field.id ? "default" : "outline"}
                    className={`px-6 py-2 rounded-full ${
                      activeField === field.id
                        ? "bg-amber-600 text-white"
                        : "bg-white text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    {field.name}
                  </Button>
                ))}
              </div>
              <Card className='bg-white'>
                <CardContent className='p-6 '>
                  <h3 className='text-2xl font-semibold text-amber-800 mb-4 text-center'>
                    {fieldContent[activeField].title}
                  </h3>
                  <Carousel autoplay withControls={false} delay={8000} className="mx-auto my-8 opacity-80">
                    {fieldContent[activeField].image.map((image, index) => (
                      <CarouselSlide key={index} as={Center} >
                        <Image
                          src={image}
                          alt='Slide'
                          width={1080}
                          height={500} 
                          />
                      </CarouselSlide> 
                    ))}
                </Carousel>
                  <p className='text-amber-700 text-center'>
                    {fieldContent[activeField].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-amber-600 text-white py-24'>
          <div className='container text-center space-y-6 max-w-2xl mx-auto'>
            <h2 className='text-4xl font-bold'>School Guide Book</h2>
            <p className='text-xl'>資料請求（願書一式同封）</p>
            <Button
              size='lg'
              variant='secondary'
              className='rounded-full text-lg px-8 bg-white text-amber-800 hover:bg-amber-100'
            >
							<Link href={"https://www.hal.ac.jp/request?school=NH"}>
              	無料で送付します
							</Link>
            </Button>
          </div>
        </section>

        {/* AD Section */}
        <section>

        </section>
      </main>

      {/* Footer */}
      <footer className='border-t py-12 bg-amber-200'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center'>
              <div className='space-y-3'>
                <h3 className='font-semibold text-base text-amber-900'>
                  企業採用担当者様へ
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya/for/company'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      採用情報
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya/for/company'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      企業パートナーシップ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h3 className='font-semibold text-base text-amber-900'>
                  新学生の方へ
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya/enter/daytime/flow'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      入学案内
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya/apply'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      オープンキャンパス
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya/enter/scholarship'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      奨学金情報
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h3 className='font-semibold text-base text-amber-900'>
                  キャンパス
                </h3>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/tokyo'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      東京
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/osaka'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      大阪
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.hal.ac.jp/nagoya'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      名古屋
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='text-sm text-amber-700 hover:text-amber-900 transition-colors'
                    >
                      パリ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h3 className='font-semibold text-base text-amber-900'>SNS</h3>
                <div className='flex justify-center space-x-2'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-300'
                  >
										<Link href={"http://www.facebook.com/halnagoya"}>
                    	<Facebook className='w-4 h-4 text-amber-900' />
										</Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-300'
                  >
										<Link href={"https://x.com/hal_nagoya"}>
                    	<Twitter className='w-4 h-4 text-amber-900' />
										</Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-300'
                  >
										<Link href={"https://instagram.com/hal.ac.jp/"}>
                    	<Instagram className='w-4 h-4 text-amber-900' />
										</Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-300'
                  >
										<Link href={"https://www.linkedin.com/"}>
                    	<Linkedin className='w-4 h-4 text-amber-900' />
										</Link>
                  </Button>
                </div>
              </div>
              <div className='space-y-3 col-span-2 md:col-span-3 lg:col-span-1'>
                <Image
                  src='/01_header/header_logo_all.svg'
                  alt='HAL College Logo'
                  height={50}
                  width={150}
                  className='object-cover'
                  style={{margin:"0 20px"}}
                />
                <p className='text-sm text-amber-700'>
                  © {new Date().getFullYear()} HAL College. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
