import * as iam from "aws-cdk-lib/aws-iam";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Auth, use } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
import { MediaStack } from "./MediaStack";

export function AuthStack({ stack, app }) {
  const { userApi } = use(ApiStack);
  const { UserBucket } = use(MediaStack);

  const auth = new Auth(stack, "Auth", {
    login: ["email", "phone"],
  });

  auth.attachPermissionsForAuthUsers(stack, [
    userApi,
    new iam.PolicyStatement({
      actions: ["s3:GetObject"],
      effect: iam.Effect.ALLOW,
      resources: [UserBucket.bucketArn + "/public/*"],
    }),
    new iam.PolicyStatement({
      actions: ["s3:*"],
      effect: iam.Effect.ALLOW,
      resources: [
        UserBucket.bucketArn +
          "/private/*",
      ],
    }),
  ]);

  stack.addOutputs({
    Region: app.region,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });

  return {
    auth,
  };
}
