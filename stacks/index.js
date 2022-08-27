import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { FrontendStack } from "./FrontendStack";
import { MediaStack } from "./MediaStack";

export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app
    .stack(StorageStack)
    .stack(MediaStack)
    .stack(ApiStack)
    .stack(AuthStack)
    .stack(FrontendStack);
}
