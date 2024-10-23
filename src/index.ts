import app from "./app";

const PORT: number = 5050;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
// "scripts": {
//     "test": "jest --coverage",
//     "start": "node dist/index.js", 
//     "dev": "nodemon ./src/index.ts",
//     "build": "tsc"
//   },