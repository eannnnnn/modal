# MODAL (react modal)

![use react](https://img.shields.io/badge/react-aqua) ![use typescript](https://img.shields.io/badge/language-typescript-blue) [![npm version](https://badge.fury.io/js/@dev.waca%2Fmodal.svg)](https://badge.fury.io/js/@dev.waca%2Fmodal) ![npm publish](https://github.com/dev-waca/modal/actions/workflows/publish.yml/badge.svg)

---

`react` 에서 사용 하려고 만든 `modal` 라이브러리

## Installation

```bash
npm i @dev.waca/modal
# OR ( use yarn )
yarn add @dev.waca/modal
# OR ( use pnpm )
pnpm i @dev.waca/modal
```

## Use

```typescript
import { ModalContainer } from "@dev.waca/modal";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ModalContainer />
  </React.StrictMode>
);
```
