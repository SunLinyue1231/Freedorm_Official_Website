"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {

    src: "https://player.bilibili.com/player.html?isOutside=true&aid=114114714211927&bvid=BV12cRPYcEcK&cid=28719714257&p=1&high_quality=1&autoplay=0",
    title: "痛点展示",
  },
  {

    src: "https://player.bilibili.com/player.html?isOutside=true&aid=114114479330491&bvid=BV146RPYeEgb&cid=28719714073&p=1&high_quality=1&autoplay=0",
    title: "功能展示",
  },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-video relative"
            >
              <iframe
                src={videos[currentIndex].src}
                title={videos[currentIndex].title}
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen={true}
                className="w-full h-[600px] rounded-lg shadow-lg"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={previous}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-4 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>

          <div className="flex justify-center space-x-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

