import "./Nabar.css";
const Navbar = () => {
  return (
    <div className="Nabar">
      <div className="nav-logo">EV - olution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-connect">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
