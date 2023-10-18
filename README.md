# NextJS 13 - CSS Performance Playground

## Getting Started

First, choose the branch you want to review and run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance Examples

### CSS Modules

### Styled Components

### Tailwind CSS (???)

### MUI Base UI

Branch: base-ui

```
Route (app)                              Size     First Load JS
┌ ○ /                                    47.6 kB         128 kB
└ ○ /_not-found                          884 B          81.4 kB
+ First Load JS shared by all            80.5 kB
  ├ chunks/66263f16-6656037f363e3499.js  50.9 kB
  ├ chunks/663-50271872e1727a7e.js       27.6 kB
  ├ chunks/main-app-fa7f854c2dbf58a4.js  230 B
  └ chunks/webpack-6f662172e5be200b.js   1.73 kB
```
