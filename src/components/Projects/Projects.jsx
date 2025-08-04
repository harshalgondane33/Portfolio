import React from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Home/ProjectCard'
import Todo from '../../assets/Todo.png'
import DriveMate from '../../assets/DriveMate.png'
import ecommerce from '../../assets/E-Commerce.png'
import CourseWithMe from '../../assets/CourseWithMe.png'
import morseIcon from '../../assets/morse-in-one.jpg'
import memeImg from '../../assets/meme.jpeg'
import testGif from '../../assets/teminal_test_your_luck2-min.gif'
import morseWeb from '../../assets/morse-in-one-web.png'
import morseCodeGen from '../../assets/morse-code-generator.png'
import myBlogImg from '../../assets/my-blog.jpeg'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="flex flex-col justify-center items-center gap-4  w-full min-h-screen text-center my-8 "
    >
      <h1 className="text-3xl text-center font-bold max-w-[800]">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 ">
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
          delay={0.4}
        />
        <ProjectCard
          title="E-Commerce"
          description="A responsive E-Commerce platform with a seamless shopping experience."
          image={ecommerce}
          link="https://github.com/harshalgondane33/E-commerce-react"
          delay={0.6}
        />
        <ProjectCard
          title="Todo App"
          description="A lightweight Todo App with a clean design and smooth UX."
          image={Todo}
          link="https://github.com/harshalgondane33/Todo"
          delay={0.8}
        />
      </div>
    </div>
  )
}
