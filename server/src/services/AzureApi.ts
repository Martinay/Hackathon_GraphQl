import axios from "axios";
import Build from "../schemas/Build";
import { BuildResult } from "../schemas/BuildResult";

export class AzureApi {
    builds: Build[] = []

    public async getBuilds(): Promise<Build[]> {
        if (this.builds.length === 0) {
            await this.loadBuilds();
        }
        return this.builds;
    }

    public checkBuild(id: number) : Build | undefined {
        const build = this.builds.find(x => x.id === id);
        if(build !== undefined)
            build.checked = !build.checked;
        return build;
    }

    private async loadBuilds() {
        const devopsProjectUrl = process.env.AZURE_URL;
        const response = await axios.get(
            devopsProjectUrl + "/_apis/build/builds?api-version=5.0",
            {
                auth: {
                    username: process.env.AZURE_NAME as string,
                    password: process.env.AZURE_TOKEN as string
                }
            });

        this.builds = response.data.value.map((x: any) => <Build>{ id: x.id, buildName: x.buildNumber, result: this.convertResult(x.result), requestedFor: x.requestedFor.displayName, checked: false });
    }

    private convertResult(result: string): BuildResult {
        switch (result) {
            case undefined:
                return BuildResult.none;
            case "succeeded":
                return BuildResult.succeeded;
            case "failed":
                return BuildResult.failed;
            case "canceled":
                return BuildResult.canceled;
            default:
                throw `BuildResult is not provided ${result}`;
        }
    }
}

const api = new AzureApi();
export default api;