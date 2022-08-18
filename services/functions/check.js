export const main = async (event) => {

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello Guys`,
  };
};
