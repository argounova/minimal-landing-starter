import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { menuItems } from "./constants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import { FiChevronDown as Chevron } from "react-icons/fi"
import {
    Styles,
    NavTopLevel,
    SubNavStyles,
    HamburgerStyles,
    LogoStyles,
} from "./styles"
import {
    barOneVariants,
    barTwoVariants,
    barThreeVariants,
    menuList,
    subMenuNavVariants,
} from "./anim"

const Navigation = () => {
    const [isOpen, setNav] = useState(false)
    
    const [subNavIsOpen, setSubNav] = useState(false)
  
    const toggleNav = () => {
      setNav((isOpen) => !isOpen)
    }
  
    const toggleSubNav = () => {
      setSubNav((subNavIsOpen) => !subNavIsOpen)
    }

    const { title } = UseSiteMetadata()

    return (
        <Styles>
          <div className="nav">
            <div className="container">
              <HamburgerStyles
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                onClick={toggleNav}
                onKeyDown={toggleNav}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                className={isOpen ? " open" : ""}
              >
                <motion.span
                  className="bar"
                  variants={barOneVariants}
                ></motion.span>
                <motion.span
                  className="bar"
                  variants={barTwoVariants}
                ></motion.span>
                <motion.span
                  className="bar"
                  variants={barThreeVariants}
                ></motion.span>
              </HamburgerStyles>
    
              {title && (
                <LogoStyles>
                  <Link to="/">
                    {title}
                  </Link>
                </LogoStyles>
              )}
            </div>
          </div>
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuList}
            transition={{ type: "ease", stiffness: 50, velocity: 50 }}
            className="menu"
          >
            <NavTopLevel>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to={item.path}
                    activeClassName="menu__item--active"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
                <li className={subNavIsOpen ? "open" : "closed"}>
                  <button
                    type="button"
                    onClick={toggleSubNav}
                    onKeyDown={toggleSubNav}
                  >
                    <Chevron />
                  </button>
    
                  <SubNavStyles
                    initial="closed"
                    animate={subNavIsOpen ? "open" : "closed"}
                    variants={subMenuNavVariants}
                  >
                    <li>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to="/products"
                      >
                        All Products
                      </Link>
                    </li>
                    <hr />
                    {/* {featuredProduct.map((item, index) => {
                      const { gatsbyPath, title } = item
                      return (
                        <li key={index}>
                          <Link
                            onClick={toggleNav}
                            onKeyDown={toggleNav}
                            to={gatsbyPath}
                          >
                            {title}
                          </Link>
                        </li>
                      )
                    })} */}
                  </SubNavStyles>
                </li>
            </NavTopLevel>
          </motion.div>
        </Styles>
    )
}

export default Navigation