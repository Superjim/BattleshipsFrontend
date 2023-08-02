const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Battleships
      </a>
      <div className="navbar-nav mr-auto">
        <button className="btn btn-outline-info mr-2" disabled>
          Create Game
        </button>
        <button className="btn btn-outline-info mr-2" disabled>
          My Games
        </button>
        <button className="btn btn-outline-info" disabled>
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
