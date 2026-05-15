import "dotenv/config";
import { app } from "./app";

app.listen({ port: Number(process.env.PORT) || 3333 }, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3333}`)
})