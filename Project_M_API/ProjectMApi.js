import HTTPSCall from './HttpsCaller.js';

const PROJECT_M_API_URL = "https://flyff-api.sniegu.fr";

class ProjectM
{
  constructor()
  {
  }
  
  getAllClassIds()
  {
    return HTTPSCall(PROJECT_M_API_URL + "/class");
  }
}

export default ProjectM;