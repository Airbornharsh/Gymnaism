import { Bucket } from "@serverless-stack/resources";

export function MediaStack({ stack, app }) {
  const UserBucket = new Bucket(stack, "UserAccess", {
    cors: [
      {
        maxAge: "2 days",
        allowedOrigins: ["*"],
        allowedHeaders: ["*"],
        allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
      },
    ],
  });

  stack.addOutputs({
    UserBucketArn: UserBucket.bucketArn,
    UserBucketName: UserBucket.bucketName,
  });

  return {
    UserBucket,
  };
}
