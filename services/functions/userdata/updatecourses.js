import AWS from "aws-sdk";
import { main as getMain } from "./get";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  try {
    const getMainData = await getMain(event);
    const getData = JSON.parse(getMainData.body).courses;

    const data = JSON.parse(event.body);

    const courses = [...getData, data.courseId];

    const params = {
      TableName: "harshairborn-gymnaism-User",
      Key: {
        userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      },
      UpdateExpression: "SET courses = :courses",
      ExpressionAttributeValues: {
        ":courses": courses,
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
