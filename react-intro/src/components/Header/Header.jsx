const Header = (props) => {
  console.log(props);

  return (
    <header>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;
