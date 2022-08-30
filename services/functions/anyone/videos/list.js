import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const params = {
    TableName: "harshairborn-gymnaism-Video",
    KeyConditionExpression: "page = :page",
    ExpressionAttributeValues: {
      ":page": 1,
    },
  };

  try {
    const result = await dynamoDb.query(params).promise();
    const newResult = result.Items.map((Item) => {
      return {
        page: Item.page,
        videoId: Item.videoId,
        description: Item.description,
        name: Item.name,
        imageS3: Item.imageS3,
        duration: Item.duration,
        by: Item.by,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newResult),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
