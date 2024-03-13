import { Router } from "express";
import locationRoutes from "./features/location/route";
import materialRoutes from "./features/material/route";
import authRoutes from "./features/user/routes";
import propertyRoutes from "./features/propertry/route";

const rootRouter = Router();
rootRouter.use("/auth", authRoutes);
rootRouter.use("/location", locationRoutes);
rootRouter.use("/material", materialRoutes);
rootRouter.use("/property", propertyRoutes);

export default rootRouter;
