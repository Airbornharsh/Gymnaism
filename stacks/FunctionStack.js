import { Function } from "@serverless-stack/resources";

export function FunctionStack({ stack, app }) {
  const UserLinkFn = new Function(stack, "UserLinks", {
    handler: "../services/functions/LinkUserAccounts/index.main",
  });

  stack.addOutputs({
    UserLink: UserLinkFn.functionName,
  });

  return {
    UserLinkFn,
  };
}
