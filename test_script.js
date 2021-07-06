import ProjectMAPI from './Project_M_API/ProjectMApi.js';
const projectMApi = new ProjectMAPI();

async function foo()
{
  const x = await projectMApi.getAllClassIds();

  console.log('got all class ids:');
  console.log(x);
  
  await wait(2);
  
  
  
  
}

foo();



function wait(timeoutInSeconds) {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutInSeconds * 1000);
  });
}