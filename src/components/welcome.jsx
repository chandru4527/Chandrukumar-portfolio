import React, { useEffect, useState } from 'react'

const Welcome = ({ onFinish }) => {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 100)
    const timer2 = setTimeout(() => setStage(2), 2000)
    const timer3 = setTimeout(() => onFinish(), 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-blue-950 overflow-hidden">

      <div className="text-center px-4">

        <h1
          className={`
            text-4xl md:text-6xl font-bold text-blue-500
            transition-all duration-700 ease-in-out

            ${stage === 0 ? "opacity-0 translate-y-10" : ""}
            ${stage === 1 ? "opacity-100 translate-y-0" : ""}
            ${stage === 2 ? "opacity-0 -translate-y-10" : ""}
          `}
        >
          Welcome to My Portfolio
        </h1>

        <p
          className={`
            text-gray-400 mt-4 text-lg
            transition-all duration-700 ease-in-out

            ${stage === 0 ? "opacity-0 translate-y-10" : ""}
            ${stage === 1 ? "opacity-100 translate-y-0" : ""}
            ${stage === 2 ? "opacity-0 -translate-y-10" : ""}
          `}
        >
          CHANDRUKUMAR | Full Stack Developer
        </p>

      </div>

    </div>
  )
}

export default Welcome