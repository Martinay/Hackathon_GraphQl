import { registerEnumType } from "type-graphql";

export enum BuildResult {
    succeeded,
    canceled,
    failed,
    none
}

registerEnumType(BuildResult, {
  name: "BuildResult", // this one is mandatory
  description: "The basic buildResult", // this one is optional
});