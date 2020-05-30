## React-hooks-firebase

experimental of react hooks for firebase.

### Motivation

I love Firebase so much and I used it for my playground to build a Web app or Mobile app. 
Instead of re-creating the initial project from scratch I just want to create a tool

### Installation

```bash
npm i --save react-hook-firebase or yarn add react-hook-firebase
```

### Usage

```tsx
import { useFirebase } from 'react-hook-firebase';

const Component = () => {
    const { auth, database, storage } = useFirebase(config, options)
}
```