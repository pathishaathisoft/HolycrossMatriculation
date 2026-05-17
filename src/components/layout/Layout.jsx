import MainHeader from './MainHeader.jsx'
import Navbar from './Navbar.jsx'
import SiteFooter from './SiteFooter.jsx'
import TopBar from './TopBar.jsx'
import { footerData } from '../../data/homeData.js'
import { navLinks } from '../../data/navLinks.js'
import { siteConfig } from '../../data/siteConfig.js'

function Layout({ children }) {
  return (
    <div className="page-shell">
      <TopBar
        contactItems={siteConfig.topBar.contactItems}
        quickActions={siteConfig.topBar.quickActions}
      />
      <MainHeader
        brand={siteConfig.brand}
        schoolLevelCards={siteConfig.schoolLevelCards}
      />
      <Navbar links={navLinks} cta={siteConfig.navbarCta} />
      {children}
      <SiteFooter footer={footerData} />
    </div>
  )
}

export default Layout
