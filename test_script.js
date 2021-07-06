import ProjectMAPI from './Project_M_API/ProjectMApi.js';
const projectMApi = new ProjectMAPI();

async function foo()
{
  const allClassIds = await projectMApi.getAllClassIds();

  console.log('got all class ids:');
  console.log(allClassIds);
  
  await wait(2);
  
  const someClass = await projectMApi.getClassById(allClassIds[0]);
  console.log(someClass);
  
  
}

foo();



function wait(timeoutInSeconds) {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutInSeconds * 1000);
  });
}