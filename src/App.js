import "./App.css";
import MyNav from "./Components/MyNav/MyNav";
import UserList from "./Components/UserList/UserList";

function App() {
    return (
        <div className="App">
            <MyNav />
            <UserList />
            <footer>
                <h3 style={{ textAlign: "center", color: "#ff8c69" }}>
                    Please join us
                </h3>
            </footer>
        </div>
    );
}

export default App;
