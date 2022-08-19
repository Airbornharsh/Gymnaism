import * as iam from "aws-cdk-lib/aws-iam";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Auth, use } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";

export function AuthStack({ stack, app }) {
  const { userApi } = use(ApiStack);

  const auth = new Auth(stack, "Auth", {
    login: ["email", "phone"],
  });

  auth.attachPermissionsForAuthUsers(stack, [
    userApi,
    // new iam.PolicyStatement({
    //   actions: ["s3:*", "ses:SendEmail", "ses:SendRawEmail"],
    //   effect: iam.Effect.ALLOW,
    //     resources: [
    //       bucket.bucketArn + "/private/${cognito-identity.amazonaws.com:sub}/*",
    //     ],
    // }),
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
