import { ReactStaticSite, use } from "@serverless-stack/resources";

export function FrontendStack({ stack, app }) {
    
  const site = new ReactStaticSite(stack, "ReactSite", {
    path: "frontend",
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
