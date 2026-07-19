function Header({ toggleTheme, darkMode }) {
  return (
    <header className="page-header">
      <h1>Project 5 - AI Chatbot</h1>

      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;