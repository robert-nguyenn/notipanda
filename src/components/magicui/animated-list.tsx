"use client"

import React, { ReactElement, ReactNode, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [messages, setMessages] = useState<ReactNode[]>([])
    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
      let mounted = true;
      const interval = setInterval(() => {
        if (mounted && messages.length < childrenArray.length) {
          setMessages((prev) => [childrenArray[messages.length], ...prev])
        } else {
          clearInterval(interval)
        }
      }, delay)

      return () => {
        mounted = false;
        clearInterval(interval)
      }
    }, [childrenArray, delay, messages.length])

    return (
      <div className={`flex flex-col-reverse items-center gap-3 ${className}`}>
        <AnimatePresence mode="popLayout">
          {messages.map((item, index) => (
            <AnimatedListItem key={(item as ReactElement).key || index}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0.96, opacity: 0, y: 20 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 350, 
        damping: 25,
        mass: 0.5 
      }
    },
    exit: { 
      scale: 0.96, 
      opacity: 0,
      transition: { duration: 0.2 } 
    },
  }

  return (
    <motion.div 
      {...animations} 
      layout 
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  )
}