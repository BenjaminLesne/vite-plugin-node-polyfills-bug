steps to reproduce:
1- install dependencies
```
pnpm install
```

2- build the library :
```
pnpm build
```

3-  In main.jsx, uncomment line 4 and comment line 3

4- start the dev server
```
pnpm dev
```

5- check the console in Chrome
`Uncaught SyntaxError: Unexpected string` and the webpage show nothing

Expected behaviour :
The web page should show the component App which displays : "yay production"

I reproduced it with a Firefox and Chrome.