"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Freedorm的续航如何？",
    answer:
      "无限，Freedorm通过借用门内引出线直接供电，因此无需担心续航问题，设备可以持续运行，无需担心电池。",
  },
  {
    question: "Freedorm是否符合学校合规要求？",
    answer:
      "Freedorm符合相关的学校合规要求，并通过必要的安全和质量标准，确保符合使用规范。",
  },
  {
    question: "Freedorm是否支持多用户？",
    answer:
      "是的，Freedorm全系列支持最多添加8个蓝牙设备。对于Basic和Pro用户，每个设备ID最多可绑定4个微信用户。一次购买即可全宿舍共享使用！",
  },
  {
    question: "Freedorm提供上门安装服务吗？",
    answer:
      "Freedorm的安装非常简单，只需使用附带的螺丝刀，过程不超过6颗螺丝，按照安装手册操作，大约20分钟即可完成，无需专业安装人员。所以Freedorm不提供上门安装服务，但如有任何问题，可以在售后服务QQ群(1014153547)中与我们沟通，我们会第一时间帮助您解决。",
  },
  {
    question: "安装Freedorm时需要注意哪些事项？",
    answer: "建议两个人安装，确保操作稳定。",
  },
  {
    question: "Freedorm能适配使用钥匙开门的研究生宿舍吗？",
    answer:
      "非常遗憾，目前Freedorm不支持荔园、欣园等钥匙开门的宿舍，也暂时没有计划进行适配。",
  },
  {
    question: "如果离校或毕业后要拆卸Freedorm设备复原原有配置，怎么办？",
    answer:
      "Freedorm面板拆卸非常简便，只需拆卸一颗螺丝后安装上原面板即可轻松恢复原有配置，操作不可谓不简单。",
  },
  {
    question: "Freedorm出问题时会把我锁在门外吗？",
    answer:
      "Freedorm硬件上没有设计任何锁门功能，最坏的情况是恢复到使用校卡开门，您不必担心Freedorm会将您锁在门外。",
  },
  {
    question: "Freedorm是否有退货或退款政策？",
    answer:
      "根据淘宝平台政策，我们为Freedorm提供7天无理由退货服务。如果您对产品不满意，可以在规定时间内进行退货处理，但请确保设备完好无损，并附带所有配件。",
  },
  {
    question: "使用Freedorm会不会产生额外的费用？",
    answer:
      "不会，Freedorm商业模式为买断制，本身没有月费或年度费用，并且提供6年的服务支持，唯一可能的费用为设备购买时的成本。",
  },
  {
    question: "Freedorm是否收集我的个人数据？",
    answer:
      "Freedorm重视用户隐私，仅收集与功能相关的基本信息，不会收集您的学号、姓名等个人身份信息，所有数据都严格保密。",
  },
  {
    question: "我的开锁会被记录吗？",
    answer:
      "Freedorm Basic不会记录任何开锁行为。 对于Pro用户，为了提供“开门记录”功能，Freedorm会记录开锁时间和访客码使用情况，但这些数据仅与设备ID关联，不涉及您的个人身份或物理位置。我们承诺，所有数据严格保密，仅用于“开门记录”功能的提供。",
  },
  {
    question: "我的室友是否能够看到我的开门记录？",
    answer:
      "不能，不同用户的记录不会互相混淆，您只能查看自己的开门记录以及分享的访客码的开门记录，室友无法查看您的记录，您也无法查看室友的记录。",
  },
  {
    question: "Freedorm是否会与第三方共享我的数据？",
    answer:
      "我们承诺不会将您的个人数据出售给第三方，除非为了完成服务或符合法律要求的情况。所有数据共享都遵循我们的隐私政策。",
  },
  {
    question: "如果我不想使用Freedorm的云服务，怎么办？",
    answer:
      "Freedorm项目是完全开源的。如果您不希望使用Freedorm提供的云服务，可以自行修改GitHub上的开源固件、后端和小程序前端，部署您自己的云服务。",
  },
  {
    question: "Freedorm是否接受投资？",
    answer:
      "目前，Freedorm接受投资。我们欢迎有兴趣的投资者与我们联系 support@freedorm.net ，共同推动产品的持续发展。",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full py-16 bg-background-color">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">FAQ-常见问题</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-color" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary-color" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

