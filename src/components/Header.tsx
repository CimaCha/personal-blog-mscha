import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>
                Maksim's private blog
            </span>
            <ul className='nav'>
                <li>Обо мне</li>
                <li>Проффесиональный путь</li>
                <li>Контакты</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
