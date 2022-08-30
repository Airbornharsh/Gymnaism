import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const params = {
    TableName: "harshairborn-gymnaism-Review",
    KeyConditionExpression: "page = :page",
    ExpressionAttributeValues: {
      ":page": 1,
    },
  };

  try {
    const result = await dynamoDb.query(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
      };
      
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
