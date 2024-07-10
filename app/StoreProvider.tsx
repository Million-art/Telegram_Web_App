'use client'
import React from 'react'
 import "./globals.css";
import { store } from '@/redux/store/store'
import { Provider } from 'react-redux'
import { App } from 'konsta/react';


export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <Provider store={store}>
        {children}
      </Provider>
    </App>

  );
}