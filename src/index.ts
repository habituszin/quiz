import API from "api/indesx";

const api = new API();

async function startApp() {
  api
    .start()
    .then((port) => {
      console.log(`App is listening on ${port}`);
    })
    .catch((err) => {
      console.error("Failed to start API:", err);
    });
}

startApp();
