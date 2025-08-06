import React from 'react';
import CustomNavLink from './CustomNavLink';

const NavigationLinks = ({ addToNavButtonsRefs }) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
    { to: "/services", label: "Services" },
    { to: "/community", label: "Community" }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-3">
      {links.map((link, index) => (
        <CustomNavLink
          key={link.to}
          {...link}
          addToNavButtonsRefs={addToNavButtonsRefs}
          index={index}
        />
      ))}
    </nav>
  );
};

export default NavigationLinks;
