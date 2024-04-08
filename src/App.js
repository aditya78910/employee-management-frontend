import ApplicationContext from "./context/ApplicationContext";
import AppContent from "./AppContent";

function App() {
  return (
    <div>
      <ApplicationContext>
        <AppContent />
      </ApplicationContext>
    </div>
  );
}

export default App;
