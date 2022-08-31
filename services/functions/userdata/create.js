import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);
  console.log(data);
  console.log(event.requestContext.authorizer.iam.cognitoIdentity.identityId);

  const params = {
    TableName: "harshairborn-gymnaism-User",
    Item: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      emailId: data.emailId,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      address: data.address,
      profilePhotoS3: data.profilePhotoS3 || null,
      profilePhotoUrl: data.profilePhotoUrl,
      membershipId: null,
      courses: [],
      videos: [],
      orders: [],
      workouts: [],
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
