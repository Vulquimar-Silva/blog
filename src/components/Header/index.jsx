import logoSvg from '../../assets/img/svg/logo.svg'

export const Header = () => {
  return (
    <>
      <header className='flex-space-between'>
        <div className='logo'>
          <img src={logoSvg} alt="Logo do Blog" />
        </div>
        <div className='search'>
          <input type="text" name='search' className='input-search' placeholder='Buscar artigos, podcasts, destaques...' />
        </div>
        <ul className='menu'>
          <li><a href="#" className='nav-link'>Categories</a></li>
          <li><a href="#" className='nav-link'>About</a></li>
          <li><a href="#" className='nav-link'>Contact</a></li>
        </ul>
      </header>
    </>
  )
}
