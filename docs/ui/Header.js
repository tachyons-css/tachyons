import { Component }  from 'react'

import Container from './Container'
import Flex from './Flex'
import { NavLink, MobileNavLink, TitleLink, HamburgerIcon, TimesIcon } from './'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      mobileMenuOpen: false,
      links: [
        {
          title: 'Documentation',
          label: 'Documentation',
          href: '/docs'
        },
        {
          title: 'Components',
          label: 'Components',
          href: '/components/'
        },
        {
          title: 'Gallery of sites built with Tachyons',
          label: 'Gallery',
          href: '/gallery'
        },
        {
          title: 'Resources',
          label: 'Resources',
          href: '/resources'
        },
        {
          title: 'Tachyons on GitHub',
          label: 'GitHub',
          href: 'http://github.com/tachyons-css/tachyons/'
        }
      ]
    }    
  }
  
  toggleMenu () {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  navigation (device = 'desktop') {
    const components = {
      mobile: MobileNavLink,
      desktop: NavLink
    }

    const LinkType = components[device]

    return (
      <div>
        {
          this.state.links.map((link, index) => {
            return (
              <LinkType title={link.title} href={link.href} key={index}>
                { link.label }
              </LinkType>
            )
          })
        }
      </div>
    )
  }

  render () {
    const { version } = this.props
    const icon = this.state.mobileMenuOpen ? <TimesIcon/> : <HamburgerIcon/>
    
    return (
      <header>
        <div className="pv3">
          <Container padding={true}>
            <Flex justify="between" alignItems="center">
              <TitleLink
                href="/"
                title="Home"
                text="Tachyons"
                subtext={`v${version}`}
              />

              <Flex>
                <div className="flex dn-m">
                  <button className="button-reset bn bg-transparent flex items-center" onClick={this.toggleMenu.bind(this)}>
                    { icon }
                  </button>
                </div>
                <div className="dn flex-m">
                  { this.navigation('desktop') }
                </div>
              </Flex>
            </Flex>
          </Container>
        </div>
        { this.state.mobileMenuOpen && <nav className="bg-near-white pv1 dn-m">
          <Container padding={true}>
            { this.navigation('mobile') }
          </Container>
        </nav> }
      </header>
    )
  }
}

export default Header