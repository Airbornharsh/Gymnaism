import AWS from "aws-sdk";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event) => {
  const params = {
    TableName: "harshairborn-gymnaism-Video",
    Key: {
      page: 1,
      videoId: event.pathParameters.videoId,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    const newResult = {
      by: result.Item.by,
      videoId: result.Item.videoId,
      description: result.Item.description,
      imageS3: result.Item.imageS3,
      duration: result.Item.duration,
      name: result.Item.name,
    };

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
