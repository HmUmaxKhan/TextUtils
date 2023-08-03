import React from 'react'

export default function About(props) {
  return (
    <div className={`container text-center text-${props.bg==='light'?'dark':'light'}`}>
      <h1 className="my-5"><strong>About</strong></h1>
      <p className={`my-6`}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam voluptates cupiditate culpa distinctio facilis, consequatur provident perferendis consequuntur, officia quis unde ea saepe laudantium quasi tempora laboriosam iste incidunt sapiente iure reprehenderit natus dolore. Quis, tempore quasi! Neque odit temporibus similique, id cumque cum tenetur sed repudiandae harum. Atque blanditiis perferendis, aspernatur delectus praesentium, officiis veniam repellat, laudantium maxime similique harum ipsa eum rem fuga ratione facere sunt placeat!.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut aliquam quae repellat. Sed fugit minus repudiandae natus itaque hic autem, adipisci eaque ex neque maxime fugiat? Ullam, consequatur odio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quibusdam optio molestiae repudiandae? Neque blanditiis eum mollitia quia provident accusantium deleniti fugiat numquam nulla? Placeat consectetur id harum delectus unde ducimus sapiente. Debitis doloremque porro sunt modi architecto incidunt ducimus sapiente adipisci nihil. Natus, quibusdam. Ab aliquid minus iste ipsa ea ratione corrupti commodi assumenda sunt libero, officia laborum nihil!</p>
   
    </div>
  )
}
