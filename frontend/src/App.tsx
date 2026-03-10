import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// Public pages
import Home from './pages/Home'
import Story from './pages/Story'
import GFConcept from './pages/GFConcept'
import FloorMap from './pages/FloorMap'
import ZoneGuide from './pages/ZoneGuide'
import Observatory from './pages/Observatory'
import Pompidou from './pages/Pompidou'
import Buffet from './pages/Buffet'
import Restaurant from './pages/Restaurant'
import News from './pages/News'

// Admin pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminNews from './pages/admin/AdminNews'
import AdminFloorMap from './pages/admin/AdminFloorMap'
import AdminStores from './pages/admin/AdminStores'
import AdminLinks from './pages/admin/AdminLinks'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="news" element={<AdminNews />} />
        <Route path="floor-map" element={<AdminFloorMap />} />
        <Route path="stores" element={<AdminStores />} />
        <Route path="links" element={<AdminLinks />} />
      </Route>

      {/* Public */}
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/story" element={<PublicLayout><Story /></PublicLayout>} />
      <Route path="/gf-concept" element={<PublicLayout><GFConcept /></PublicLayout>} />
      <Route path="/floor-map" element={<PublicLayout><FloorMap /></PublicLayout>} />
      <Route path="/zone-guide" element={<PublicLayout><ZoneGuide /></PublicLayout>} />
      <Route path="/observatory" element={<PublicLayout><Observatory /></PublicLayout>} />
      <Route path="/pompidou" element={<PublicLayout><Pompidou /></PublicLayout>} />
      <Route path="/buffet" element={<PublicLayout><Buffet /></PublicLayout>} />
      <Route path="/restaurant" element={<PublicLayout><Restaurant /></PublicLayout>} />
      <Route path="/news" element={<PublicLayout><News /></PublicLayout>} />
    </Routes>
  )
}
