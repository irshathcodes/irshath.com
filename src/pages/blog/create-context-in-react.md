---
title: "How to create context in React"
date: "November 16, 2022"
excerpt: "Learn how to create a global context in react"
layout: "../../layouts/BlogPostLayout.astro"
---

In this example we're going to use Vite App. Implementation is very similar to other frameworks in react as well.

-   First create a new Vite App
-   go to `./src/App.js`

```javascript
// ./src/App.js

import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export default function App() {
    const [name, setName] = useState("irshath");

    return (
        <>
            <AppContext.Provider value={name}>
                <Navbar />
                <TodoList />
            </AppContext.Provider>
        </>
    );
}
```

What we're doing is, we've created a context which returns a react component. The `createContext` method takes an argument where you can pass any data except react state, if you have any static data you want to share across all components you can pass in there, in our case we'll just pass an empty object.

We're wrapping all the components inside `AppContext.Provider`. Now whatever we pass inside the `value` prop can be accessed by the child components. In our case `<Navbar />` and `<TodoList />` have access to the `name` state.

## How to get context values

Go to any component which is wrapped inside `AppContext.Provider`.

```javascript
import { useContext } from "react";
import { AppContext } from "./src/App.js";

export default function Navbar() {
    const name = useContext(AppContext);

    return (
        <nav>
            <div>{name}</div>
        </nav>
    );
}
```

we access the context data by importing `useContext` hook, pass the `AppContext` context we've created in the `App.js`.

That's how we can create a context and get context values.
Still we can do some cleanups. Putting all the context logic in one `App.js` component is not great.

How about creating a new component where we have all the context logic, then we can just wrap that new component in the `App.js`

So let's do that

-   We'll create a new folder called **context** in **src** directory.
-   Inside that new folder we'll create a file called **AppContext.js**

```javascript
import { createContext, useState } from "react";

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
    const [name, setName] = useState("irshath");

    return <AppContext.Provider value={name}>{children}</AppContext.Provider>;
}
```

Now we have a seperate component for context where you can put context specific logic like fetch data from an api and so on.
Let's wrap this component inside **App.js**

```javascript
export default function App() {
    return (
        <>
            <AppContextProvider>
                <Navbar />
                <TodoList />
            </AppContextProvider>
        </>
    );
}
```

That's it! we've created a React Context.
