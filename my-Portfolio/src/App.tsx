
import { Route, Routes } from 'react-router'
import './App.css'
import WorldNews from './pages/worldNews/worldNews'
import ProjectSection from './pages/project_section'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import SideBar from './components/sidebar/sidebar'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      }
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<ProjectSection />} />
        <Route path="/news" element={<WorldNews />} />
      </Routes>
    </QueryClientProvider>
  )
}



export default App
