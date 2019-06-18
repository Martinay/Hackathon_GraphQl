import { Arg, Query, Mutation, Resolver, Int } from "type-graphql";
import Build from "../schemas/Build";
import azureApi from "../services/AzureApi"
import { type } from "os";

@Resolver(of => Build)
export default class {


    @Query(returns => [Build], { nullable: true })
    async builds(): Promise<Build[]> {
        return await azureApi.getBuilds(); 
    }

    @Mutation()
    check(@Arg("id", type => Int) id: number) : Build {
        console.log(id)
        return azureApi.checkBuild(id) as Build;
    }
}