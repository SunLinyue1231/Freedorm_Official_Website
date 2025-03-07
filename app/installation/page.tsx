"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const installationSteps = [
  {
    title: "准备工具",
    description: "确保您有以下工具：Freedorm锁体、Freedorm桥接板、随附的螺丝刀、说明书。",
    image: "https://s1.locimg.com/2025/02/15/240733efd4b4f.jpg",
  },
  {
    title: "拆下门锁外壳螺丝",
    description: "将门内锁壳上的螺丝拧下，收好备用\n注：从门锁上拆下的螺丝后续都需要装回原位，请大家取下时妥善保管",
    image: "https://s1.locimg.com/2025/02/15/867a06231af3a.jpg",
  },
  {
    title: "取下门锁外壳",
    description: "将锁壳从门上取下，初次取下可能需要用力左右摇晃几次，取下后门如图所示",
    image: "https://s1.locimg.com/2025/02/15/b21dac89ff430.jpg",
  },
  {
    title: "拆除银色铁壳",
    description: "将银色铁壳上的螺丝拧下，螺丝可能有2~3颗，位置如图所示\n摘除螺丝后将银色铁壳取下，其下方为一块黑色铁皮",
    image: "https://s1.locimg.com/2025/02/15/8c0b796d4a1cb.jpg",
  },
  {
    title: "拆除黑色铁皮螺丝",
    description: "将黑色铁皮上的两颗螺丝拧下，位置如图所示\n此时需要两人共同操作，一人扶住门外的锁体部分，另一人拧螺丝",
    image: "https://s1.locimg.com/2025/02/15/0f84cf49fed74.jpg",
  },
  {
    title: "拆下黑色铁皮和门外锁体",
    description: "将黑色铁皮和门外锁体部分一同取下",
    image: "https://s1.locimg.com/2025/02/15/d19d587e0c570.jpg",
  },
  {
    title: "拆下排线公头",
    description: "门外锁体内部有一个排线插头，如图所示，将公头拔下",
    image: "https://s1.locimg.com/2025/02/15/ad9bdbda8f9b3.jpg",
  },
  {
    title: "连接桥接板-1",
    description: "将桥接板较短一条排线的公头插入到刚刚拔下的母头上",
    image: "https://s1.locimg.com/2025/02/15/0bd4b4232b871.jpg",
  },
  {
    title: "连接桥接板-2",
    description: "将从门锁上拔下的公头插入桥接板上的母头中",
    image: "https://s1.locimg.com/2025/02/15/76529ef7e9c5b.jpg",
  },
  {
    title: "收纳桥接板",
    description: "将桥接板和排线理顺后塞入门外锁体内，注意线与线之间不要相互缠绕，以便收纳",
    image: "https://s1.locimg.com/2025/02/15/84d92446ebff0.jpg",
  },
  {
    title: "将长排线穿入门的另一侧",
    description: "将桥接板的长排线放入门上最上方的孔，穿到门的另一边",
    image: "https://s1.locimg.com/2025/02/15/764251adf1450.jpg",
  },
  {
    title: "装回门外锁体和黑色铁皮",
    description: "将门外锁体部分和黑色铁皮按原样装回门上，桥接板的长排线需穿过黑色铁皮最上方的方孔",
    image: "https://s1.locimg.com/2025/02/15/2f961118e8f94.jpg",
  },
  {
    title: "拧回黑色铁皮螺丝",
    description: "将螺丝拧回黑色铁皮上",
    image: "https://s1.locimg.com/2025/02/15/9dbedf7ff70f8.jpg",
  },
  {
    title: "将长排线穿过银色铁壳",
    description: "将长排线穿过银色铁壳上方的小洞，穿到银色铁壳的方形洞外。有的铁壳上并未装电池盒，方形洞内没有任何东西，直接将线穿过洞即可",
    image: "https://s1.locimg.com/2025/02/15/80dca0093ea25.jpg",
  },
  {
    title: "将长排线插入Freedorm锁体",
    description: "将螺丝拧回银色铁壳上，将长排线公头插入Freedorm锁体上对应的母头中",
    image: "https://s1.locimg.com/2025/02/15/14014dde54667.jpg",
  },
  {
    title: "固定Freedorm锁体",
    description: "将锁体装到银色锁壳上，拧上最先从原来锁壳上拆下的螺丝，即安装完成",
    image: "https://s1.locimg.com/2025/02/15/51e8ae0c8f49d.jpg",
  },
]

export default function InstallationGuide() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section id="top" className="pt-24 pb-16 bg-gradient-to-b from-background-start to-background-end">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">安装指南</h1>
            <p className="text-xl text-gray-600">只需15分钟，16步轻松完成安装</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    layout="responsive"
                    width={1600}
                    height={900}
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">安装注意事项</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  建议两人配合安装，一人扶住面板，另一人固定螺丝
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  安装前请仔细阅读说明书，确保理解每个步骤
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  注意电源线的走向，避免被螺丝压到或折断
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  螺丝需依次均匀拧紧，避免受力不均导致面板变形
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  如遇到任何问题，请及时联系售后服务QQ群获取支持
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">安装视频教程</h2>
            <div className="aspect-video">
              <iframe
                src="https://player.bilibili.com/player.html?aid=113950347887171&bvid=BV1GLPyejEVz&cid=28225831739&p=1&high_quality=1"
                className="w-full h-[600px] rounded-lg shadow-lg"
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen={true}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

