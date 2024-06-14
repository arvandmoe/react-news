import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { newsCategories } from "@/data/categories";
import Autoplay from "embla-carousel-autoplay";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 gap-y-4">
        <div className="flex flex-wrap gap-2 px-8 pt-4">
          {newsCategories.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer px-3 py-1 rounded-full text-xs font-medium transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200 dark:invert dark:bg-gray-200`}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="relative w-full px-8 mx-auto overflow-hidden rounded-lg">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src="https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                        width={1200}
                        height={500}
                        alt="News Image"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Breaking News: Major Earthquake Hits West Coast
                          </h2>
                          <p className="text-white/80 line-clamp-2 md:line-clamp-3">
                            A powerful earthquake has struck the West Coast,
                            causing widespread damage and disrupting power and
                            transportation in the region. Emergency responders
                            are on the scene and authorities are urging
                            residents to stay indoors and avoid unnecessary
                            travel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((item, index) => {
              return (
                <Card className="flex flex-col rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                    width={400}
                    height={225}
                    alt="News Image"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">
                        Breaking News: Major Earthquake Hits West Coast
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        A powerful earthquake has struck the West Coast, causing
                        widespread damage and disrupting power and
                        transportation in the region. Emergency responders are
                        on the scene and authorities are urging residents to
                        stay indoors and avoid unnecessary travel.
                      </p>
                    </div>
                    <div className="text-gray-500 text-sm mt-4">
                      2 hours ago
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="hidden md:block">
            <Card className="rounded-lg overflow-hidden shadow-lg">
              <CardHeader className="bg-gray-900 text-white py-3 px-4">
                <h3 className="text-lg font-bold">Trending News</h3>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start gap-4 mb-4 last:mb-0">
                  <img
                    src="https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                    width={80}
                    height={80}
                    alt="Trending News Image"
                    className="rounded-md w-20 h-20 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Tech Company Unveils Groundbreaking New Product
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The highly anticipated launch has industry experts buzzing
                      about the potential impact of this innovative technology.
                    </p>
                    <div className="text-gray-500 text-xs mt-2">
                      3 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4 last:mb-0">
                  <img
                    src="https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                    width={80}
                    height={80}
                    alt="Trending News Image"
                    className="rounded-md w-20 h-20 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Sports Star Announces Retirement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The legendary athlete's decision has sparked an outpouring
                      of tributes and reflections on their storied career.
                    </p>
                    <div className="text-gray-500 text-xs mt-2">
                      6 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4 last:mb-0">
                  <img
                    src="https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                    width={80}
                    height={80}
                    alt="Trending News Image"
                    className="rounded-md w-20 h-20 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Political Scandal Rocks the Nation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The latest developments in the ongoing controversy have
                      captured the attention of the public and the media.
                    </p>
                    <div className="text-gray-500 text-xs mt-2">1 day ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
