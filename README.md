# Intro and Layout

- `npx create-next-app@latest .`
- `npm run dev`
- extension 'ES7+ React/Redux/...' 설치 후 `rafce` -> 자동완성

## components

### Hero.tsx

```typescript
import Image from 'next/image';

const Hero = () => {
  return <div>Hero</div>;
};

export default Hero;
```

### index.ts

```typescript
import Hero from './Hero';
import CustomButton from './CustomButton';

export { Hero, CustomButton };
```

### CustomButton.tsx

```typescript
'use client';

import Image from 'next/image';
import { CustomButtonsProps } from '../types';

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonsProps) => {
  return (
    <button disabled={false} type={'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`felx-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
```

- types/index.ts에서 interface 정의

## app

- layout.tsx에서 Navbar, Footer 추가

# Car Catalogue

## components

### SearchManufacturer.tsx

- `npm install @headlessui/react`
- 입력값이 포함된 목록 보여주기

```typescript
const filteredManufacturers =
  query === ''
    ? manufacturers
    : manufacturers.filter((item) =>
        item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
      );
```
