```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return <div>Contact Us</div>;
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
```