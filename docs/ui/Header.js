import { Component } from 'react'

import Container from './Container'
import Flex from './Flex'
import { NavLink, MobileNavLink, TitleLink, HamburgerIcon, TimesIcon } from './'
import { header } from './nav'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      mobileMenuOpen: false
    }
  }

  toggleMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  navigation(device = 'desktop') {
    const components = {
      mobile: MobileNavLink,
      desktop: NavLink
    }

    const LinkType = components[device]

    return (
      <div>
        {header.map((link, index) => {
          return (
            <LinkType title={link.title} href={link.href} key={index}>
              {link.label}
            </LinkType>
          )
        })}
      </div>
    )
  }

  render() {
    const { version } = this.props
    const icon = this.state.mobileMenuOpen ? <TimesIcon /> : <HamburgerIcon />

    return (
      <header className="fixed z-max bg-white w-100 bb b--black-10">
        <div className="pv3">
          <div>
            <Flex justify="between" alignItems="center">
              <TitleLink
                href="/"
                title="Home"
                text="Tachyons"
                subtext={`v${version}`}
              />

              <div className="flex dn-m">
                <button
                  className="button-reset bn bg-transparent flex items-center"
                  onClick={this.toggleMenu.bind(this)}
                >
                  {icon}
                </button>
              </div>
              <div className="dn flex-m">{this.navigation('desktop')}</div>
            </Flex>
          </div>
        </div>
        {this.state.mobileMenuOpen && (
          <nav className="bg-near-white pv1 dn-m">
            <Container padding={true}>{this.navigation('mobile')}</Container>
          </nav>
        )}
      </header>
    )
  }
}

export default Header
