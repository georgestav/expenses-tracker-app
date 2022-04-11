import "./Card.scss";

const Card = (props) => {
  // set className and inherited className
  const classes = "card " + props.className;
  // pass with props.children the nested elements of the Card HTMLElement
  return <div className={classes}>{props.children}</div>;
};

export default Card;
