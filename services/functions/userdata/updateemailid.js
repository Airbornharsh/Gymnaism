import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "harsh-gym-User",
    Key: {
      userId: "12",
    },
    UpdateExpression: "SET emailId = :emailId",
    ExpressionAttributeValues: {
      ":emailId": data.emailId || null,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
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
