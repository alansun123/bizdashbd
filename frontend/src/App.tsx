import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">BizDashBD</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Dynamic Dashboard System</p>
        
        <div className="flex justify-between items-center mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
          
          <motion.div
            animate={{ scale: count > 0 ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            {count}
          </motion.div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(c => c + 1)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Increment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(0)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reset
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default App