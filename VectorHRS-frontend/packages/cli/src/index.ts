import  generateResources  from "./modules/generateResources";
import  generateSchemas  from "./modules/generateSchemas"


generateResources("../../packages/resources/src/servers/schema/");
generateSchemas("../../packages/resources/src/servers/resources/");