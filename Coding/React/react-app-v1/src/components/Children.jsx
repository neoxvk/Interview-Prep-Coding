function MyDiv({ children }){
    return (
      <div>
        Children of Greeting:
        <br/>
        {children}
      </div>
    )
}

export default function Greeting() {
  return (
    <MyDiv>
      <span>{"Hello"}</span>
      <span>{"World"}</span>
      <h2> My name is Vivek</h2>
    </MyDiv>
  );
}