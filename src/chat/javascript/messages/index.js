// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
const axios = require('axios');
const connectToGotIt = async ({body}) => {
  const gotItBody = {
      "T": body.text,
      "EM": true,
      "S": true
  }
  try{
    const response = await axios({
        method: 'POST',
        url: 'https://api.gotit.ai/NLU/v1.5/Analyze',
        headers: {
            "Content-Type":"application/json",
            "Authorization":"Basic MjE3NC1ZNGZHRUMyRjpFY3gxWmZOeURRdE5DZVNUZXlKL1hyRHBVZjNpN2dzaHlhVkE="
          },
        data:gotItBody
  });
  //console.log(response.data);
  return response.data;
}catch(e){
  console.error(e);
  return;
}

}

module.exports = async function (context, req) {
  console.log("REQBODY--------_>",req);
  req.body.apiGotIt = await connectToGotIt(req);
  return {
    "target": "new1Message",
    "arguments": [ req.body ]
  };
};