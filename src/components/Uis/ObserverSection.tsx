import React, { useState, useEffect, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

type ObserverSectionProps = {
  height?: string
  animClassName?: string
  className?: string
  children: ReactNode
}

export const ObserverSection = ({
  height = '1080px',
  animClassName,
  className,
  children
}: ObserverSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 一度トリガーされたら解除しない
    threshold: 0.1 // 10%見えたらトリガー
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <>
      {isVisible ? (
        <div className={`${className} ${animClassName}`}>{children}</div>
      ) : (
        <div ref={ref} style={{ height }}></div>
      )}
    </>
  )
}
