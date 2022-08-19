import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const params = {
    TableName: "harsh-gym-Video",
    Key: {
      page: 1,
      videoId: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
