
module.exports = connectToGotIt = async ({body}) => {
    const gotItBody = {
        "T": body.text,
        "EM": true
    }
    const response = await fetch('http://localhost:7071/api/messages',{
          method: 'POST',
          headers: {
              "Content-Type":"application/json",
              "Authorization":"Basic MjE3NC1ZNGZHRUMyRjpFY3gxWmZOeURRdE5DZVNUZXlKL1hyRHBVZjNpN2dzaHlhVkE="
            },
          body: JSON.stringify(bogotItBodydy)
    });
    console.log(response);
    return response;

}

module.exports = connectToGotIt;
