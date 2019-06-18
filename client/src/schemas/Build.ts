import { BuildResult } from "./BuildResult";

export default class Build {
    id!: number;
    result!: BuildResult;
    buildName!: string;
    requestedFor!: string;
    checked!:boolean;
}