import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
// https://vitejs.dev/config/
export default defineConfig({
  base:"/Contact/",
  plugins: [
    react({
      babel:{
        "plugins": [
          
          ["babel-plugin-macros", {
          "fontawesome-svg-core": {
            "license": "free"
          }
        }]
        ]
      }
    }),
    macrosPlugin()
  ],
})
