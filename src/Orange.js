const style = { color: "red", fontSize: "32px", backgroundColor: "black" };
const lemo = { color: "blue", backgroundColor: "yellow" };
const melon = { color: "green", backgroundColor: "blue" ,fontSize: "32px"};
const Orange = () => {
  return (
    <div style={style}>
      <h3>Orange</h3>
    </div>
  );
};
const Lemon = () => {
  return (
    <div style={lemo}>
      <h3>Lemon</h3>
    </div>
  );
};
const Melon = () => {
  return (
    <div style={melon}>
      <h3>Melon</h3>
    </div>
  );
};
export { Orange, Lemon, Melon };
