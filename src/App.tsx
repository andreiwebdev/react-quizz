import Wrapper from "./components/layout/Wrapper";
import AppContainer from "./components/layout/AppContainer";
import Topbar from "./components/common/Topbar";
import HomeScreen from "./components/screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizzScreen from "./components/screens/QuizzScreen";
import GameOver from "./components/screens/GameOver";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Wrapper>
                <AppContainer>
                    <Router>
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/quizz" element={<QuizzScreen />} />
                            <Route path="/game-over" element={<GameOver />} />
                        </Routes>
                    </Router>
                </AppContainer>
            </Wrapper>
        </Provider>
    );
}

export default App;
