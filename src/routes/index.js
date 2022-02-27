const routes = (app) => {

    const v1 = app
    v1.use("/api/v1", authRouter);
  
  };
  
  export {routes}