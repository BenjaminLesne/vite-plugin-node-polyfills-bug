import './App.css'

export function App() {
  const message = import.meta.env.mode === "production" ? "Yay prod" : "not prod" 
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}