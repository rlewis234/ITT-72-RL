function Header({ toggleTheme }) {
  return (
    <header>
      <h1>Project 4 - Game Character Cards</h1>
      <p>React based Character Cards Dashboard.</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;