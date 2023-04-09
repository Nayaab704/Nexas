import app from "./server.js";
import pkg from 'app-root-path';
const appRootPath = pkg.path;





app.listen(8000, () => {
  console.log("server started on port 8000");
});
