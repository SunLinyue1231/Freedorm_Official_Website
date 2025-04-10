"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
          Freedorm-随心锁域
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/installation#top" className="text-gray-600 hover:text-primary transition-colors">
            安装说明
          </Link>
          <Link href="/aftersale#top" className="text-gray-600 hover:text-primary transition-colors">
            售后服务
          </Link>
          <Link href="https://github.com/freedorm/" className="text-gray-600 hover:text-primary transition-colors">
            项目开源
          </Link>
          <Link href="/genius" className="text-gray-600 hover:text-primary transition-colors">
            主创团队
          </Link>
          <a
            href="https://shop469175341.taobao.com/?spm=pc_detail.29232929/evo365560b447259.shop_block.dshopinfo.4a927dd6jfG5pS"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary text-sm"
          >
            立即购买
          </a>
        </nav>
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="https://item.taobao.com/item.htm?ft=t&id=875000927536"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary text-sm"
          >
            立即购买
          </a>
          <button className="text-primary" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col items-center py-4">
              <Link
                href="#features"
                className="py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                型号对比
              </Link>
              <Link
                href="/installation#top"
                className="py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                安装说明
              </Link>
              <Link
                href="/aftersale#top"
                className="py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                售后服务
              </Link>
              <Link
                href="/genius"
                className="py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                主创团队
              </Link>
              <Link
                href="#"
                className="py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                产品开源
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

