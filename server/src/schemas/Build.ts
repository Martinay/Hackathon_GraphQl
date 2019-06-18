import { Field, ObjectType, Int } from "type-graphql";
import { BuildResult } from "./BuildResult";

@ObjectType()
export default class Build {
    
    @Field(type => Int)
    id: number;

    @Field(type => BuildResult)
    result: BuildResult;
    
    @Field()
    buildName: string;

    @Field()
    requestedFor: string;    

    @Field()
    checked: boolean;    
}