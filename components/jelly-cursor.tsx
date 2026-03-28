'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// GSAP Ticker Hook
function useTicker(callback: any, paused: boolean) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback)
    }
    return () => {
      gsap.ticker.remove(callback)
    }
  }, [callback, paused])
}

const EMPTY = {} as any
function useInstance(value: any = {}) {
  const ref = useRef(EMPTY)
  if (ref.current === EMPTY) {
    ref.current = typeof value === 'function' ? value() : value
  }
  return ref.current
}

// Function for Mouse Move Scale Change
function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
  return Math.min(distance / 735, 0.35)
}

// Function For Mouse Movement Angle in Degrees
function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI
}

const CURSOR_DIAMETER = 50

export default function JellyCursor() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile('ontouchstart' in window)
  }, [])

  const jellyRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorMoved, setCursorMoved] = useState(false)

  const { x, y } = useMousePosition()

  // Save pos and velocity Objects
  const pos = useInstance(() => ({ x: 0, y: 0 }))
  const vel = useInstance(() => ({ x: 0, y: 0 }))
  const set = useInstance()

  // Set GSAP quick setter Values
  useLayoutEffect(() => {
    if (!jellyRef.current) return
    set.x = gsap.quickSetter(jellyRef.current, 'x', 'px')
    set.y = gsap.quickSetter(jellyRef.current, 'y', 'px')
    set.r = gsap.quickSetter(jellyRef.current, 'rotate', 'deg')
    set.sx = gsap.quickSetter(jellyRef.current, 'scaleX')
    set.sy = gsap.quickSetter(jellyRef.current, 'scaleY')
    set.width = gsap.quickSetter(jellyRef.current, 'width', 'px')
    set.height = gsap.quickSetter(jellyRef.current, 'height', 'px')
  }, [])

  // Animation loop
  const loop = useCallback(() => {
    if (!set.width || !set.sx || !set.sy || !set.r) return
    
    const rotation = getAngle(vel.x, vel.y)
    const scale = getScale(vel.x, vel.y)

    if (!isHovering) {
      set.x(pos.x)
      set.y(pos.y)
      set.width(50 + scale * 300)
      set.r(rotation)
      set.sx(1 + scale)
      set.sy(1 - scale * 2)
    } else {
      set.r(0)
    }
  }, [isHovering, pos, vel, set])

  // Mouse move handler
  useLayoutEffect(() => {
    if (isMobile) return

    const setFromEvent = (e: MouseEvent) => {
      if (!jellyRef.current) return
      if (!cursorMoved) setCursorMoved(true)

      const el = e.target as HTMLElement
      const isHoverTarget =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button')

      if (isHoverTarget) {
        setIsHovering(true)
        const rect = el.getBoundingClientRect()
        gsap.to(jellyRef.current, {
          rotate: 0,
          width: el.offsetWidth + 20,
          height: el.offsetHeight + 20,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: 10,
          duration: 1.5,
          ease: 'elastic.out(1, 0.3)',
        })
      } else {
        gsap.to(jellyRef.current, {
          borderRadius: 50,
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
        })
        setIsHovering(false)
      }

      const x = e.clientX
      const y = e.clientY

      gsap.to(pos, {
        x: x,
        y: y,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        onUpdate: () => {
          vel.x = (x - pos.x) * 1.2
          vel.y = (y - pos.y) * 1.2
        },
      })

      loop()
    }

    window.addEventListener('mousemove', setFromEvent)
    return () => window.removeEventListener('mousemove', setFromEvent)
  }, [isMobile, cursorMoved, loop, pos, vel])

  useTicker(loop, !cursorMoved || isMobile)

  if (isMobile) return null

  return (
    <>
      <div
        ref={jellyRef}
        className="w-[50px] h-[50px] border-2 border-white/50 jelly-blob fixed left-0 top-0 rounded-lg z-[9999] pointer-events-none will-change-transform translate-x-[-50%] translate-y-[-50%]"
        style={{
          backdropFilter: 'invert(100%)',
          WebkitBackdropFilter: 'invert(100%)',
        }}
      />
      <div
        ref={dotRef}
        className="w-3 h-3 rounded-full fixed translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[10000]"
        style={{
          top: y,
          left: x,
          backdropFilter: 'invert(100%)',
          WebkitBackdropFilter: 'invert(100%)',
        }}
      />
    </>
  )
}

// Simple mouse position hook
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}
