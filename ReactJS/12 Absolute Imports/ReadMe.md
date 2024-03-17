# Absolute Imports

You can configure your application to support importing modules using absolute paths. This can be done by configuring a jsconfig.json or `tsconfig.json` file in the root of your project. If you're using TypeScript in your project, you will already have a `tsconfig.json` file.

Below is an example `jsconfig.json` file for a JavaScript project. You can create the file if it doesn't already exist:

```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

If you're using TypeScript, you can configure the baseUrl setting inside the compilerOptions of your project's tsconfig.json file.

Now that you've configured your project to support absolute imports, if you want to import a module located at src/components/Button.js, you can import the module like so:

```
import Button from 'components/Button';

export default function MyComponent(){
  return <Button title="Edit"/>
}
```

if you're using Vite, you need to configure your `vite.config.js` and add this line of code:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@" : "src",
    }
  }
})
```
