import ProjectMAPI from './Project_M_API/ProjectMApi.js';

// const projectMApi = new ProjectMAPI();

function wait(timeoutInSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeoutInSeconds * 1000);
  });
}

async function foo() {
  let listOfClasses;

  const allClassIds = await ProjectMAPI.getAllClassIds();
  console.log('got all class ids:');
  console.log(allClassIds);

  await wait(2);
  const someClass = await ProjectMAPI.getClassById(allClassIds[0]);
  console.log('got class from id:');
  console.log(someClass);

  await wait(2);
  const arrayOfIds = [allClassIds[0], allClassIds[1]];
  listOfClasses = await ProjectMAPI.getClassById(arrayOfIds);
  console.log('got list of classes from an array:');
  console.log(listOfClasses);

  await wait(2);
  listOfClasses = await ProjectMAPI.getClassById('764,2246,9686');
  console.log('got list of classes from a string:');
  console.log(listOfClasses);

  await wait(2);
  listOfClasses = await ProjectMAPI.getClassById('764, 2246, 9686');
  console.log('got list of classes from a string, with spaces:');
  console.log(listOfClasses);

  await wait(2);
  listOfClasses = await ProjectMAPI.getClassesByIds('764, 2246, 9686');
  console.log('getClassesByIds:');
  console.log(listOfClasses);
}

foo();
