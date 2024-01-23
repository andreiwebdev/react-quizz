import Wrapper from "./components/layout/Wrapper";
import AppContainer from "./components/layout/AppContainer";
import Topbar from "./components/common/Topbar";
import HomeScreen from "./components/screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizzScreen from "./components/screens/QuizzScreen";
import GameOver from "./components/screens/GameOver";

function App() {
    return (
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
    );
}

export default App;
