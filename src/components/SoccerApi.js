const getInfo = async () => {
  const apiToken =
    "jvOs1YZOFc0zU5cQYhSstapPuodPyRI59bawkVYuL0pPxFV6WaMWXEyMpTuU";
  let includes = "&include=trophies";
  let url =
    "https://soccer.sportmonks.com/api/v2.0/teams/2?api_token=" +
    apiToken +
    includes;

  const response = fetch(url);
  console.log(response);
};
