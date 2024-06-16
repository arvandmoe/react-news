import { Article } from "@/types/article";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ArticleCarouselProps {
  articles: Article[];
}

const ArticleCarousel = (props: ArticleCarouselProps) => {
  const { articles } = props;
  return (
    <Carousel
      className="w-full rounded-lg"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {articles?.slice(0, 5).map((item, index) => {
          return (
            <CarouselItem key={index}>
              <div className="relative w-full h-full">
                <img
                  src={
                    item?.image ??
                    "https://qsuper.qld.gov.au/-/media/images/qsuperpw/news/news-placeholder-imagesss.jpg"
                  }
                  width={1200}
                  height={500}
                  alt="News Image"
                  className="w-full max-h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {item?.title}
                    </h2>
                    <p className="text-white/80 line-clamp-2 md:line-clamp-3">
                      {item?.headline}
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
  );
};

export default ArticleCarousel;
