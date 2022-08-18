import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const {
    UserTable,
    WorkoutTable,
    VideoTable,
    CourseTable,
    MembershipTable,
    OrderTable,
  } = use(StorageStack);

  const userApi = new Api(stack, "UserApi", {
    defaults: {
      // authorizer: "iam",
      function: {
        permissions: [
          UserTable,
          WorkoutTable,
          VideoTable,
          CourseTable,
          MembershipTable,
          OrderTable,
        ],
      },
    },
    routes: {
      "GET /": "functions/check.main",

      //user data
      "POST /userdata": "functions/userdata/create.main",
      "GET /userdata": "functions/userdata/get.main",
      "PUT /userdata/emailid": "functions/userdata/updateemailid.main",
      "PUT /userdata/firstname": "functions/userdata/updatefirstname.main",
      "PUT /userdata/lastname": "functions/userdata/updatelastname.main",
      "PUT /userdata/phonenumber": "functions/userdata/updatephonenumber.main",
      "PUT /userdata/profilephoto":
        "functions/userdata/updateprofilephoto.main",
      "PUT /userdata/membershipid":
        "functions/userdata/updatemembershipid.main",
      "PUT /userdata/courses": "functions/userdata/updatecourses.main",
      "PUT /userdata/videos": "functions/userdata/updatevideos.main",
      "PUT /userdata/orders": "functions/userdata/updateorders.main",
      "PUT /userdata/workouts": "functions/userdata/updateworkouts.main",

      //membership courses
      "GET /membership/courses/{id}": "functions/membership/coursesget.main", 
    },
  });

  const AnyApi = new Api(stack, "Api", {
    defaults: {
      // authorizer: "iam",
      function: {
        permissions: [WorkoutTable, VideoTable, CourseTable, MembershipTable],
      },
    },
    routes: {},
  });

  stack.addOutputs({
    UserApiEndpoint: userApi.url,
    AnyApiEndpoint: AnyApi.url,
  });

  return {
    userApi,
    Api,
  };
}
