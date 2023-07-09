function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝 GoCheck ✅</span>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Ada yang mau kamu catat? 🤔</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        <li>Makan</li>
        <li>Tidur</li>
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>🗒️ Kamu punya x catatan dan baru x yg dichecklist (x%) ✅</span>
    </footer>
  );
}

export default App;
