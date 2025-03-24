const Header = (props) => {
  // console.log(props);

  return (
    <header>
      <img src={props.logo}></img>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;
