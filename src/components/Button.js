const Button = ({ children, onClick }) => { 
    //Giving the button the children prop allows us to display a variety of of things on the button, 
    //making it reusable and flexible
    return (
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    );
  };

  export default Button;