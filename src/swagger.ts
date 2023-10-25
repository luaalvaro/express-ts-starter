const swaggerDefinition = {
  info: {
    title: "EXPRESS TS STARTER",
    description: "Comece editando o arquivo src/swagger.ts",
    version: "1.0.0"
  },
  servers: [
    {
      url: "http://localhost:3333",
    },
  ],
}

export const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"]
};