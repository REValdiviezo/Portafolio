import { useState, useEffect } from 'react';
import html from "../assets/carrusel/HTML.png";
import css from "../assets/carrusel/CSS.png";
import javascript from "../assets/carrusel/Javascript.png";
import express from "../assets/carrusel/express.png";
import git from "../assets/carrusel/git.png";
import github from "../assets/carrusel/github.png";
import node from "../assets/carrusel/node.png";
import postgre from "../assets/carrusel/postgre.png";
import postman from "../assets/carrusel/postman.png";
import react from "../assets/carrusel/React.png";
import redux from "../assets/carrusel/redux.png";
import sequelize from "../assets/carrusel/sequelize.png";
import sql from "../assets/carrusel/sql.png";
import tailwind from "../assets/carrusel/tailwind.png";

const Tecnologias = () => {

  return (
    <div className="slider w-9/12 h-auto m-auto overflow-hidden">
      <div className='slide-track flex '>
        <div className='w-[200px]'><img className='w-full' src={tailwind} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={html} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={css} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={javascript} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={express} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={git} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={github} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={node} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={postgre} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={postman} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={react} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={redux} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={sequelize} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={sql} alt="" /></div>

        <div className='w-[200px]'><img className='w-full' src={tailwind} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={html} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={css} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={javascript} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={express} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={git} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={github} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={node} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={postgre} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={postman} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={react} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={redux} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={sequelize} alt="" /></div>
        <div className='w-[200px]'><img className='w-full' src={sql} alt="" /></div>
      </div>
    </div>
  );
};

export default Tecnologias;