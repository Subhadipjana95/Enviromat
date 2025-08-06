import React from 'react';
import UserDropdownItem from './UserDropdownItem';

const AuthenticatedOptions = ({ handleNavigation, handleLogout, user }) => (
  <>
    <div className="px-4 py-2 border-b border-gray-200/50">
      <p className="text-sm font-medium text-gray-800">
        {user?.firstName || 'User'}
      </p>
      <p className="text-xs text-gray-500">
        {user?.email || 'user@example.com'}
      </p>
    </div>
    <UserDropdownItem
      onClick={() => handleNavigation('/profile')}
      icon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      }
      label="View Profile"
    />
    <UserDropdownItem
      onClick={handleLogout}
      icon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      }
      label="Logout"
      color="text-red-600"
      hoverBg="hover:bg-red-50"
      hoverText="hover:text-red-700"
    />
  </>
);

export default AuthenticatedOptions;
