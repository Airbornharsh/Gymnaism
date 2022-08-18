import AWS from "aws-sdk";
import { main as getMain } from "./get";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  try {
    const getMainData = await getMain(event);
    const getData = JSON.parse(getMainData.body).courses;

    const data = JSON.parse(event.body);

    const courses = [...getData, { courseId: data.course }];

    const params = {
      TableName: "harsh-gym-User",
      Key: {
        userId: "12",
      },
      UpdateExpression: "SET courses = :courses",
      ExpressionAttributeValues: {
        ":courses": courses || getData,
      },
      ReturnValues: "ALL_NEW",
    };

    const result = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};