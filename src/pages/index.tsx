import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Bell, Book, Calendar, Home, Info, Palette, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className='min-h-screen bg-orange-50'>
      <header className='bg-gradient-to-r from-amber-100 to-orange-200 p-6 text-center'>
        <h1 className='text-4xl font-bold text-orange-800'>ハル幼稚園</h1>
        <p className='text-lg text-orange-700'>
          みんなニコニコ、楽しい幼稚園！
        </p>
      </header>

      <nav className='bg-orange-100 p-3 shadow-md'>
        <ul className='flex justify-center space-x-6'>
          <li>
            <Link
              href='#news'
              className='text-orange-700 hover:text-orange-500 transition-colors'
            >
              お知らせ
            </Link>
          </li>
          <li>
            <Link
              href='#about'
              className='text-orange-700 hover:text-orange-500 transition-colors'
            >
              幼稚園について
            </Link>
          </li>
          <li>
            <Link
              href='#education'
              className='text-orange-700 hover:text-orange-500 transition-colors'
            >
              教育方針
            </Link>
          </li>
          <li>
            <Link
              href='#contact'
              className='text-orange-700 hover:text-orange-500 transition-colors'
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>

      <main className='container mx-auto mt-8 p-4'>
        <section id='hero' className='mb-12'>
          <div className='relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg'>
            <Image
              src='/1.jpg?height=500&width=1000'
              alt='新園舎の全景'
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-orange-500/60 to-transparent flex items-end'>
              <div className='p-6 text-white'>
                <h2 className='text-3xl font-bold mb-2'>
                  新園舎が完成しました！
                </h2>
                <p className='text-lg'>
                  広くてすてきな新園舎で、子供たちは毎日快適に過ごしています！
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tabs defaultValue='news' className='mb-12'>
          <TabsList className='grid w-full grid-cols-4 rounded-xl bg-orange-100'>
            <TabsTrigger value='news'>
              <Bell className='mr-2' />
              お知らせ
            </TabsTrigger>
            <TabsTrigger value='daily'>
              <Sun className='mr-2' />
              今日の幼稚園
            </TabsTrigger>
            <TabsTrigger value='life'>
              <Calendar className='mr-2' />
              幼稚園での生活
            </TabsTrigger>
            <TabsTrigger value='gallery'>
              <Palette className='mr-2' />
              作品紹介
            </TabsTrigger>
          </TabsList>
          <TabsContent value='news' className='mt-4'>
            <Card className='bg-white'>
              <CardContent className='pt-6'>
                <ul className='space-y-4'>
                  <li className='flex items-center'>
                    <span className='text-orange-700'>
                      20XX-07-07 入園説明会～八尾プリズムホール～
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <span className='text-orange-700'>
                      20XX-07-01 親子との教室参加者募集
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <span className='text-orange-700'>
                      20XX-06-25 親と子の絵画教室 参加者募集
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <span className='text-orange-700'>
                      20XX-06-05 幼年消防クラブ 発会式
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='daily' className='mt-4'>
            <Card className='bg-white'>
              <CardContent className='pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='relative h-[250px] rounded-lg overflow-hidden'>
                    <Image
                      src='/15.jpg?height=250&width=400'
                      alt='今日の幼稚園の様子1'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='relative h-[250px] rounded-lg overflow-hidden'>
                    <Image
                      src='/11.jpg?height=250&width=400'
                      alt='今日の幼稚園の様子2'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <p className='mt-6 text-orange-700'>
                  今日の幼稚園の様子をお伝えします。子供たちは元気いっぱい遊んでいます！
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='life' className='mt-4'>
            <Card className='bg-white'>
              <CardContent className='pt-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                  <div className='relative h-[200px] rounded-lg overflow-hidden'>
                    <Image
                      src='/17.jpg?height=200&width=300'
                      alt='朝の会の様子'
                      layout='fill'
                      objectFit='cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-orange-500/70 text-white p-2'>
                      <p className='text-sm'>朝の会</p>
                    </div>
                  </div>
                  <div className='relative h-[200px] rounded-lg overflow-hidden'>
                    <Image
                      src='/10.jpg?height=200&width=300'
                      alt='お昼ごはんの様子'
                      layout='fill'
                      objectFit='cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-orange-500/70 text-white p-2'>
                      <p className='text-sm'>お昼ごはん</p>
                    </div>
                  </div>
                  <div className='relative h-[200px] rounded-lg overflow-hidden'>
                    <Image
                      src='/16.jpg?height=200&width=300'
                      alt='お帰りの会の様子'
                      layout='fill'
                      objectFit='cover'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-orange-500/70 text-white p-2'>
                      <p className='text-sm'>お帰りの会</p>
                    </div>
                  </div>
                </div>
                <p className='text-orange-700'>
                  ハル幼稚園での1日の流れや年間行事についてご紹介します。
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='gallery' className='mt-4'>
            <Card className='bg-white'>
              <CardContent className='pt-6'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className='relative h-[150px] rounded-lg overflow-hidden'
                    >
                      <Image
                        src={`/${i}.jpg?height=150&width=200&text=作品${i}`}
                        alt={`子供の作品${i}`}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section id='education' className='mb-12'>
          <h2 className='text-2xl font-bold text-orange-800 mb-4 flex items-center'>
            <Book className='mr-2' />
            ハル幼稚園の教育
          </h2>
          <Card className='bg-white'>
            <CardContent className='pt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold mb-2 text-orange-700'>
                      SIあそび
                    </h3>
                    <p className='mb-4 text-orange-600'>
                      お子様一人ひとりが、自ら考え、気づき、創意工夫する力、思考する力を養うことを目的としています。
                    </p>
                  </div>
                  <div className='relative h-[200px] rounded-lg overflow-hidden mt-4'>
                    <Image
                      src='/24.jpg?height=200&width=400'
                      alt='SIあそびの様子'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold mb-2 text-orange-700'>
                      特別講師による指導
                    </h3>
                    <ul className='list-disc list-inside mb-4 text-orange-600'>
                      <li>絵画造形教育</li>
                      <li>英語教育</li>
                      <li>プール指導</li>
                      <li>体操</li>
                      <li>声楽指導</li>
                      <li>中国語（年長5才のみ）</li>
                      <li>パソコン使ってのローマ字指導(年長5才のみ)</li>
                    </ul>
                  </div>
                  <div className='relative h-[200px] rounded-lg overflow-hidden mt-4'>
                    <Image
                      src='/23.jpg?height=200&width=400'
                      alt='特別講師による指導の様子'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id='about' className='mb-12'>
          <h2 className='text-2xl font-bold text-orange-800 mb-4 flex items-center'>
            <Info className='mr-2' />
            ハル幼稚園について
          </h2>
          <Card className='bg-white'>
            <CardContent className='pt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <p className='mb-4 text-orange-700'>
                    ハル幼稚園は、「どろんこ遊び」から「英才教育」まで、幅広い教育方針を持っています。
                  </p>
                  <p className='text-orange-700'>
                    『叱らない教育方法』は、20年以上の研究の成果です。
                  </p>
                </div>
                <div className='relative h-[300px] rounded-lg overflow-hidden'>
                  <Image
                    src='/11.jpg?height=300&width=500'
                    alt='ハル幼稚園の外観'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id='contact' className='mb-12'>
          <h2 className='text-2xl font-bold text-orange-800 mb-4 flex items-center'>
            <Home className='mr-2' />
            お問い合わせ・資料請求
          </h2>
          <Card className='bg-white'>
            <CardContent className='pt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <p className='mb-2 text-orange-700'>
                    ハル幼稚園 ☎03-3344-1010
                  </p>
                  <p className='mb-4 text-orange-700'>
                    〒160-0023 東京都新宿区西新宿1-7-3
                  </p>
                  <Button className='bg-orange-500 hover:bg-orange-600 text-white'>
                    資料請求はこちら
                  </Button>
                </div>
                <div className='relative h-[250px] rounded-lg overflow-hidden'>
                  <Image
                    src='/placeholder.svg?height=250&width=400'
                    alt='ハル幼稚園の受付'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className='bg-orange-200 p-4 text-center text-orange-700'>
        <p>&copy; 20XX ハル幼稚園. All rights reserved.</p>
      </footer>
    </div>
  );
}
