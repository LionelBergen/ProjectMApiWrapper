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
  
  getClassById(id)
  {
    /*
    let idsArgument = id;
    
    if (Array.isArray(id)) {
      idsArgument = id.toString();
    }
    
    */
    return HTTPSCall(PROJECT_M_API_URL + "/class/" + id);
  }
  
  getClassByIds(ids)
  {
    return getClassById(ids);
  }
}

export default ProjectM;