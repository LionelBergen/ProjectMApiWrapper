import HTTPSCall from './HttpsCaller.js';

const PROJECT_M_API_URL = 'https://flyff-api.sniegu.fr';
const CLASS_URL = `${PROJECT_M_API_URL}/class`;
const NPC_URL = `${PROJECT_M_API_URL}/npc`;

/**
 * Same method call for getting a class versus getting multiple classes.
 * This function can accept an array, or a string of numbers seprated by commas
 * E.G: [1, 2, 3], '1,2,3', '1, 2, 3'
*/
function getClassByIdOrIds(ids) {
  return HTTPSCall(`${CLASS_URL}/${ids}`);
}

function getNpcByIdOrIds(ids) {
  return HTTPSCall(`${NPC_URL}/${ids}`);
}

class ProjectM {
  static getAllClassIds() {
    return HTTPSCall(`${CLASS_URL}`);
  }

  static getClassById(id) {
    return getClassByIdOrIds(id);
  }

  static getClassesByIds(ids) {
    return getClassByIdOrIds(ids);
  }

  static getAllNpcIds() {
    return HTTPSCall(`${NPC_URL}`);
  }

  static getNPCById(id) {
    return getNpcByIdOrIds(id);
  }

  static getNPCsByIds(ids) {
    return getNpcByIdOrIds(ids);
  }
}

export default ProjectM;
