import * as iam from "aws-cdk-lib/aws-iam";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Auth, use } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
import { MediaStack } from "./MediaStack";
import { FunctionStack } from "./FunctionStack";

export function AuthStack({ stack, app }) {
  const { userApi } = use(ApiStack);
  const { UserBucket } = use(MediaStack);

  const auth = new Auth(stack, "Auth", {
    login: ["email", "phone"],
    identityPoolFederation: {
      facebook: { appId: "1344839269381767" },
      google: {
        clientId:
          "536867957703-5olv5ulcgulb87duf9f2b7opioh1vvrn.apps.googleusercontent.com",
      },
    },
    cdk: {
      userPoolClient: {
        supportedIdentityProviders: [
          cognito.UserPoolClientIdentityProvider.GOOGLE,
          cognito.UserPoolClientIdentityProvider.FACEBOOK,
        ],
        oAuth: {
          callbackUrls: [
            "https://gymnaism.netlify.app",
            "http://localhost:3000",
          ],
          logoutUrls: [
            "https://gymnaism.netlify.app",
            "http://localhost:3000",
          ],
        },
      },
    },
  });

  const domain = auth.cdk.userPool.addDomain("AuthDomain", {
    cognitoDomain: {
      domainPrefix: `gymnaism-harsh-auth-domain`,
    },
  });

  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET)
    throw new Error("Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET");

  const googleProvider = new cognito.UserPoolIdentityProviderGoogle(
    stack,
    "Google",
    {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      userPool: auth.cdk.userPool,
      scopes: ["profile", "email", "openid"],
      attributeMapping: {
        email: cognito.ProviderAttribute.GOOGLE_EMAIL,
        givenName: cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
        familyName: cognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
        profilePicture: cognito.ProviderAttribute.GOOGLE_PICTURE,
        gender: cognito.ProviderAttribute.GOOGLE_GENDER,
      },
    }
  );

  const facebookProvider = new cognito.UserPoolIdentityProviderFacebook(
    stack,
    "Facebook",
    {
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      userPool: auth.cdk.userPool,
      scopes: ["profile", "email", "openid"],
      attributeMapping: {
        email: cognito.ProviderAttribute.FACEBOOK_EMAIL,
        givenName: cognito.ProviderAttribute.FACEBOOK_NAME,
      },
    }
  );

  auth.cdk.userPoolClient.node.addDependency(googleProvider, facebookProvider);

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
      resources: [UserBucket.bucketArn + "/private/*"],
    }),
  ]);

  stack.addOutputs({
    DomainName: domain.domainName,
    Region: app.region,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });

  return {
    auth,
  };
}
