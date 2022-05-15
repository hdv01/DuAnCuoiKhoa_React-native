import React from 'react'

export default function Header() {
  return (
    <div className='container-app'>
    <div className='header'>
      <div className='logo'>Tiki</div>
      <input className='search' />
      <button>Tìm kiếm</button>
    </div>
    <div className='menu_title'>
          <ul class="menu">
            <li class="menu-item">
              Trang chủ
            </li>
            <li class="menu-item">
              Sản Phẩm
            </li>
            <li class="menu-item">
              Cửa Hàng
            </li>
            <li class="menu-item">
              Liên Hệ
            </li>
          </ul>
        </div>
  </div>
  )
}