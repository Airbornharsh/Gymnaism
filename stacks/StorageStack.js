import { Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  //Table for User Details
  const UserTable = new Table(stack, "User", {
    fields: {
      userId: "string",
    },
    primaryIndex: { partitionKey: "userId" },
  });

  const WorkoutTable = new Table(stack, "Workout", {
    fields: {
      workoutId: "string",
    },
    primaryIndex: { partitionKey: "workoutId" },
  });

  //Hard coded Course table
  const CourseTable = new Table(stack, "Course", {
    fields: {
      courseId: "string",
    },
    primaryIndex: { partitionKey: "courseId" },
  });

  //Hard coded Video Table
  const VideoTable = new Table(stack, "Video", {
    fields: {
      videoId: "string",
    },
    primaryIndex: { partitionKey: "videoId" },
  });

  //Hard Coded MemberShip Tier
  const MembershipTable = new Table(stack, "Membership", {
    fields: {
      membershipId: "string",
    },
    primaryIndex: { partitionKey: "membershipId" },
  });

  //Order Detail Table
  const OrderTable = new Table(stack, "Order", {
    fields: {
      userId: "string",
      orderId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "orderId" },
  });

  stack.addOutputs({
    userTableName: UserTable.tableName,
  })

  return {
    UserTable,
    WorkoutTable,
    VideoTable,
    CourseTable,
    MembershipTable,
    OrderTable,
  };
}
