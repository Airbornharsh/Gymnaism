import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const {
    UserTable,
    WorkoutTable,
    VideoTable,
    CourseTable,
    ReviewTable,
    MembershipTable,
    OrderTable,
  } = use(StorageStack);

  const userApi = new Api(stack, "UserApi", {
    defaults: {
      authorizer: "iam",
      function: {
        permissions: [
          UserTable,
          WorkoutTable,
          VideoTable,
          CourseTable,
          ReviewTable,
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
      "GET /identityid": "functions/userdata/getidentityid.main",
      "PUT /userdata/emailid": "functions/userdata/updateemailid.main",
      "PUT /userdata/firstname": "functions/userdata/updatefirstname.main",
      "PUT /userdata/lastname": "functions/userdata/updatelastname.main",
      "PUT /userdata/phonenumber": "functions/userdata/updatephonenumber.main",
      "PUT /userdata/basic": "functions/userdata/updatebasicuserdata.main",
      "PUT /userdata/profilephoto":
        "functions/userdata/updateprofilephoto.main",
      "PUT /userdata/membershipid":
        "functions/userdata/updatemembershipid.main",
      "PUT /userdata/courses": "functions/userdata/updatecourses.main",
      "PUT /userdata/videos": "functions/userdata/updatevideos.main",
      "PUT /userdata/orders": "functions/userdata/updateorders.main",
      "PUT /userdata/workouts": "functions/userdata/updateworkouts.main",

      //membership Data Call
      "GET /membership/courses/{id}": "functions/membership/coursesget.main",
      "GET /membership/videos/{id}": "functions/membership/videosget.main",

      //course Data
      "GET /membership/video/{id}": "functions/membership/video/get.main",
      "GET /membership/course/{id}": "functions/membership/course/get.main",

      //Review data
      "POST /review": "functions/userdata/createreview.main",
    },
  });

  const AnyApi = new Api(stack, "Api", {
    defaults: {
      function: {
        permissions: [
          WorkoutTable,
          VideoTable,
          CourseTable,
          ReviewTable,
          MembershipTable,
        ],
      },
    },
    routes: {
      //courses
      "GET /courses": "functions/anyone/courses/list.main",
      "GET /course/{courseId}": "functions/anyone/courses/get.main",

      //Videos
      "GET /videos": "functions/anyone/videos/list.main",
      "GET /video/{videoId}": "functions/anyone/videos/get.main",

      //workouts
      "GET /workouts": "functions/anyone/workouts/list.main",

      //Reviews
      "GET /reviews": "functions/anyone/reviews/list.main",
    },
  });

  stack.addOutputs({
    UserApiEndpoint: userApi.url,
    AnyApiEndpoint: AnyApi.url,
  });

  return {
    userApi,
    AnyApi,
  };
}
