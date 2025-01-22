const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="../public/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Locations</li>
        <li href="#">About</li>
        <li href="#">Contact-Us</li>
      </ul>
      <div className="nav-btn">
        <button>Login</button>
        <button>LogOut</button>
      </div>
    </nav>
  );
};

export default Navigation;
