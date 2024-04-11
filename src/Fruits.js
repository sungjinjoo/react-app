/* 컴포넌트는 파일하나에 여러개를 작성할수 있다.
같은 파일에 존재하는 컴포넌트 끼리는 import 를 생략해도 삽입됨
*/
import "./Fruits.css";

const none = { listStyle: "none" };

/* 함수복습 */
const 믹서기 = (n1, n2) => {
  //함수끼리 값을 전달할수있다
  let 주스 = n1 + n2;
  return print(주스);
};
const print = (a) => {
  return console.log(a);
};

믹서기("딸기", "사과");
믹서기("김밥", "떡볶이");
믹서기("순대", "튀김");

const Fruits = (props) => {
  return (
    <ul style={none}>
      <Fruit 알맹이="🍗" 가격="5000" />
      <Fruit 알맹이="🍙" 가격="15000" />
      <Apple 사과 ="사과는 맛있다" />
     
    </ul>
  );
};
/* 리액트에서는 컴포넌트 함수끼리 데이터(값)을 주고받을떄 객체형으로 전달된다.
 만약 전달받은 값을 렌더링해야할떄는 객체 하위 키값을 작성한다
*/
const Fruit = (props) => {
    console.log(props);
   
  return <li className="fruit">{props.알맹이} {props.가격}</li>;
};

const Apple = (props) => {
  return <li className="apple">{props.사과}</li>;
};
const Banana = () => {
  return <li className="banana">🥩</li>;
};


export default Fruits;
