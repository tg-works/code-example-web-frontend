# `react-styling-antd-demo` Project Building

**Content**

- Environments
  - Software Environment
  - Library Dependencies
- Building Process
- References

## Environments

### Software Environment

- node.js 12

### Library Dependencies

## Building Process

### 1.Initial project

```
yarn create react-app react-styling-antd-demo
# or
npx create-react-app react-styling-antd-demo
```

```
yarn add antd
```

### 2. To Use antd UI components

Use <Button> in `App.js`

```
import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

Add `antd/dist/antd.css` at the top of `src/App.css`.

```css
@import '~antd/dist/antd.css';
```

### 3. Running project

```
yarn start
# or
npm start
# or
npm run start
```



## References

[1] [Ant Design Use in create-react-app](https://ant.design/docs/react/use-with-create-react-app#Install-and-Initialization)

[2] [Ant Design Getting Started](https://ant.design/docs/react/getting-started)