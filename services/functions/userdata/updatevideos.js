import AWS from "aws-sdk";
import { main as getMain } from "./get";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  try {
    const getMainData = await getMain(event);
    const getData = JSON.parse(getMainData.body).videos;

    const data = JSON.parse(event.body);

    const videos = [...getData, data.videoId];

    const params = {
      TableName: "harshairborn-gymnaism-User",
      Key: {
        userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      },
      UpdateExpression: "SET videos = :videos",
      ExpressionAttributeValues: {
        ":videos": videos || getData,
      },
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
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
