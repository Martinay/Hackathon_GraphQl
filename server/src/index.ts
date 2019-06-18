import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import BuildResolver from "./resolvers/BuildResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [BuildResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();