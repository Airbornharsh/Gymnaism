import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  console.log(event);
  const params = {
    TableName: "harshairborn-gymnaism-Membership",
    Key: {
      membershipId: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item.videos),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
