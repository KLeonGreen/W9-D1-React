import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponents";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav inside="This the Top Nav" classItem="Navbar2" />
      <header className="App-header">
        <ImageComponent imageSrc="https://onhisowntrip.com/wp-content/uploads/2020/06/rwandathingstodo-9.jpg.optimal-1000x540.jpg" altText="image 1 not found" />
        <ImageComponent imageSrc="https://blog.butterfield.com/wp-content/uploads/2022/04/7-Facts-That-Will-Change-What-You-Think-About-Rwanda.png" altText="image 2 not found" />
        <ImageComponent
          imageSrc="https://media.istockphoto.com/id/1083910706/photo/morning-in-uganda-with-volcanoes-in-background-fog-in-the-valley-and-farmlands-stretching-far.jpg?s=612x612&w=0&k=20&c=8PpOJknDE1COgSCays9cWlwhxk--BJsFPgEehIdOkEs="
          altText="image 3 not found"
        />
        <ButtonComponent content="WELCOME BACK" classStyle="first" />
        <ButtonComponent content="EXPLORE" classStyle="second" />
        <ButtonComponent content="CLICK ME" classStyle="third" />
      </header>
      <Nav inside="This is the bottom Nav" classItem="Navbar" />
    </div>
  );
}

export default App;
