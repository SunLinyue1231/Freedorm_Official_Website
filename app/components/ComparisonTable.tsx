"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

const models = [
  {
    fullname: "Freedorm Basic",
    name: "Basic",
    price: "¥24.99",
    link: "https://item.taobao.com/item.htm?abbucket=16&detail_redpacket_pop=true&id=904517416629&ltk2=1744278037516hx84u1dsoxrcfixolr4r8w&ns=1&priceTId=2147811117442780287188150e1160&query=Freedorm&skuId=5930856247056&spm=a21n57.1.hoverItem.3&utparam=%7B%22aplus_abtest%22%3A%22db58828a202f37c2e8a57eef3d98aef4%22%7D&xxc=taobaoSearch",
    features: ["蓝牙靠近解锁", "六年超长售后", "简洁按钮解锁", "直观交互灯效"],
  },
  {
    fullname: "Freedorm Pro",
    name: "Pro",
    price: "¥39.99",
    link: "https://item.taobao.com/item.htm?abbucket=16&detail_redpacket_pop=true&id=875000927536&ltk2=1744278783618xg0b1blqgzq9zah4j2o9&ns=1&priceTId=2147811117442780287188150e1160&query=Freedorm&skuId=5762262432574&spm=a21n57.1.hoverItem.2&utparam=%7B%22aplus_abtest%22%3A%228cebce7fc1912658b940f49dfb3be8ad%22%7D&xxc=taobaoSearch",
    features: [
      "蓝牙靠近解锁",
      "六年超长售后",
      "简洁按钮解锁",
      "直观交互灯效",
      "智能远程控制",
      "定时自动解锁",
      "访客一键开门",
      "特选明星轴体",
      "精选材质颜色",
    ],
  },
]

export default function ComparisonTable() {
  const allFeatures = Array.from(new Set(models.flatMap((model) => model.features)))

  return (
    <section id="comparison" className="w-full py-16 bg-white">
      <div className="container mx-auto px-">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">型号对比</h2>
        <div className="overflow-x-auto">
          <motion.div
            className="inline-block min-w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">功能 / 型号</th>
                  {models.map((model, index) => (
                    <th key={index} className="p-3 text-center">
                      <div className="font-bold text-base">{model.fullname}</div>
                      <div className="text-lg font-bold mt-2">{model.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-3 font-medium">{feature}</td>
                    {models.map((model, modelIndex) => (
                      <td key={modelIndex} className="p-3 text-center">
                        {model.features.includes(feature) ? (
                          <CheckCircle className="inline-block text-green-500" />
                        ) : (
                          <XCircle className="inline-block text-red-500" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-3"></td>
                  {models.map((model, index) => (
                    <td key={index} className="p-3 text-center">
                      <a
                        href={model.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-primary text-base px-3 py-1"
                      >
                        入手{model.name}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

