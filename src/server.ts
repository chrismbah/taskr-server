import app from "./index";

const PORT: number = 5050;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));