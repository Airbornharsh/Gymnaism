import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const params = {
    TableName: "harshairborn-gymnaism-User",
    Key: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
    },
  };

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        identityId:
          event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
