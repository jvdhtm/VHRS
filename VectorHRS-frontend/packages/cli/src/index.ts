import  generateResources  from "./modules/generateResources";
import  generateSchemas  from "./modules/generateSchemas"


generateResources("../../packages/resources/src/servers/resources/");
generateSchemas("../../packages/resources/src/servers/types/");