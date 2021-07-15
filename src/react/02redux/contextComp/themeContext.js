import React, { Component } from 'react';

export const ThemeContext = React.createContext({themeColor: "pink"});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;