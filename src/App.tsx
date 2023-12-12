import Wrapper from "./components/layout/Wrapper";
import AppContainer from "./components/layout/AppContainer";
import Topbar from "./components/common/Topbar";
import Main from "./components/layout/Main";

function App() {
    return (
        <Wrapper>
            <AppContainer>
                <Topbar />
                <Main />
            </AppContainer>
        </Wrapper>
    );
}

export default App;
