"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const teamMembers = [
  {
    name: "喝多了萨克斯",
    role: "创始人 & 首席执行官 & 嵌入式",
    image: "https://avatars.githubusercontent.com/u/87611896?s=400&u=d4316d563688d8aaa634d880c7f845bcecb88197&v=4",
    description: "多年前口罩的冰冷锁链在他心中种下了自由宿舍的种子，如今，这颗种子终于发芽。",
    github: "https://github.com/username1", // GitHub账号
    email: "drinktoomuchsax@qq.com", // 邮箱地址
  },
  {
    name: "maxing",
    role: "首席技术官 & 后端开发",
    image: "https://s1.locimg.com/2025/04/10/b83a02d79fd37.jpg",
    description: "马哥是一位经验丰富的软件工程师，负责Freedorm的整体架构设计、服务部署以及后端开发。",
    github: "https://github.com/maxinglo",
    email: "ma2965346066@gmail.com",
  },
  {
    name: "孙林樾",
    role: "设计总监",
    image: "https://s1.locimg.com/2025/04/10/0fbf53f474882.jpg",
    description: "孙是一位才华横溢的工业设计师，负责Freedorm的品牌建设、产品设计和用户体验。",
    dribbble: "https://dribbble.com/username3",
    email: "2392235744@qq.com",
  },
  {
    name: "张子木",
    role: "前端总监 & 微信小程序开发",
    image: "https://s1.locimg.com/2025/04/10/39a06f005fbd8.jpg",
    description: "承担了小程序端的所有开发工作，是Freedorm微信小程序的核心技术力量。",
    github: "https://github.com/username4",
    email: "1627264565@qq.com",
  },
]

export default function GeniusPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">主创团队</h1>
            <p className="text-xl text-gray-600">
              认识Freedorm背后的创新者们，他们致力于为您带来更智能、更温暖的生活体验。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{member.name}</h3>
                  <h4 className="text-lg font-semibold mb-2 text-gray-600">{member.role}</h4>
                  <p className="text-gray-600">{member.description}</p>

                  {/* Add links to GitHub, Dribbble and Email */}
                  <div className="mt-4">
                    <div className="flex space-x-4">
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">GitHub</a>
                      )}
                      {member.dribbble && (
                        <a href={member.dribbble} target="_blank" rel="noopener noreferrer" className="text-pink-600">Dribbble</a>
                      )}
                    </div>
                    <div className="mt-2">
                      <a href={`mailto:${member.email}`} className="text-gray-600">{member.email}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

