import ProjectMAPI from './Project_M_API/ProjectMApi.js';
const projectMApi = new ProjectMAPI();

async function foo()
{
  const x = await projectMApi.getAllClassIds();

  console.log(x);
}

foo();