# React-hooks-firebase

A Custom React Hooks for Firebase 🔥

![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-hooks-firebase)
![npm](https://img.shields.io/npm/v/react-hooks-firebase)
![GitHub last commit](https://img.shields.io/github/last-commit/irhamputra/react-hooks-firebase)
![David](https://img.shields.io/david/irhamputra/react-hooks-firebase)

### Motivation

I love Firebase so much and I used it for my playground to build a Web app or Mobile app.
Instead of re-creating the initial project from scratch I just want to create a tool

### Installation

```bash
npm i --save react-hooks-firebase
```

### Usage

```tsx
import { useFirebase } from 'react-hooks-firebase';

const config = {
    // your firebase project config
}

const Component = () => {
  const { auth, database, storage } = useFirebase(config, options);
};
```
