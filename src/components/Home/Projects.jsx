import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import ecommerce from '../../assets/E-Commerce.png'
import DriveMate from '../../assets/DriveMate.png'
import CourseWithMe from '../../assets/CourseWithMe.png'
import Todo from '../../assets/Todo.png'
import morseIcon from '../../assets/morse-in-one.jpg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
        <ProjectCard
          title="Drive-Mate Car Rental App"
          description="A full-featured car rental web application built with the MERN stack (MongoDB, Express, React, Node.js)."
          image={DriveMate}
          link="https://github.com/harshalgondane33/DriveMate-FullStack"
          delay={0.2}
        />  
        <ProjectCard
          title="CourseWithMe"
          description="A full-stack learning platform with user enrollment, admin course management, and JWT authentication. Built using React, Node.js, Express, and MongoDB."
          image={CourseWithMe}
          link="https://github.com/harshalgondane33/CourseWithMe-Full-Stack-Web-Application"
          delay={1}
        />
        <ProjectCard
          title="E-Commerce"
          description="A responsive E-Commerce platform with a seamless shopping experience."
          image={ecommerce}
          link="https://github.com/harshalgondane33/E-commerce-react"
          delay={1.4}
        />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('projects')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
