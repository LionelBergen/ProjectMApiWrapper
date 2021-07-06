import HTTPSCall from './HttpsCaller.js';

const PROJECT_M_API_URL = 'https://flyff-api.sniegu.fr';

/**
 * Same method call for getting a class versus getting multiple classes.
 * This function can accept an array, or a string of numbers seprated by commas
 * E.G: [1, 2, 3], '1,2,3', '1, 2, 3'
*/
function getClassByIdOrIds(ids) {
  return HTTPSCall(`${PROJECT_M_API_URL}/class/${ids}`);
}

class ProjectM {
  static getAllClassIds() {
    return HTTPSCall(`${PROJECT_M_API_URL}/class`);
  }

  static getClassById(id) {
    return getClassByIdOrIds(id);
  }

  static getClassesByIds(ids) {
    return getClassByIdOrIds(ids);
  }
}

export default ProjectM;
