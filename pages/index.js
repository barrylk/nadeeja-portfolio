import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 font-sans">
      <Head>
        <title>Nadeeja Nirmala</title>
      </Head>
      <main className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Nadeeja Nirmala
        </motion.h1>
        <p className="text-lg text-gray-400 mb-6">
          Welcome to my portfolio. I'm a developer with a passion for creating smooth and elegant web experiences.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-2">Contact</h2>
        <ul>
          <li>Email: nadeejanirmala@gmail.com</li>
          <li>GitHub: <a href="https://github.com/barrylk" className="text-blue-400 hover:underline">barrylk</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/nnirmala" className="text-blue-400 hover:underline">nnirmala</a></li>
        </ul>
      </main>
    </div>
  )
}
