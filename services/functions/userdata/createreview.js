import AWS from "aws-sdk";
import { v1 as uuidV1 } from "uuid";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: "harsh-gym-Review",
    Item: {
      page: 1,
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      name: data.name,
      description: data.description,
      reviewId: uuidV1(),
      createdAt: Date.now(),
    },
  };

  try {
    await dynamoDb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
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
}
