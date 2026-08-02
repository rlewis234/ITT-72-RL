function Header({ toggleTheme }) {
  return (
    <header>
        <h1>TV Show Search</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;