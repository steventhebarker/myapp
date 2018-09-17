import * as React from 'react';

export const themes = {
    light: {
      foreground: '#444444',
      background: '#AACCCC',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    red: {
      foreground: '#000000',
      background: 'red',
    },
    orange: {
      foreground: '#000000',
      background: 'orange',
    },
    yellow: {
      foreground: '#000000',
      background: 'yellow',
    },
    green: {
      foreground: '#000000',
      background: 'green',
    },
    blue: {
      foreground: '#000000',
      background: 'blue',
    },
    purple: {
      foreground: '#000000',
      background: 'purple',
    },
  };

  export const ThemeContext = React.createContext({
    theme: themes.dark
  });

