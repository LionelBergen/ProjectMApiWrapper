FLYFF Project M API Wrapper
---------------------------  
Very easy to use, simple wrapper for the Project M Flyff API.  

# Usage / Quick Start
```
import ProjectMAPI from './Project_M_API/ProjectMApi.js';
// In the future, instantiating the class with an API key may be required!
// const projectMApi = new ProjectMAPI();

// get all class ID's and log them
ProjectMAPI.getAllClassIds().then(console.log);
```

# Methods

<details><summary>getAllClassIds</summary>
<p>   

```javascript
// Returns a list of all ID's. E.G [764, 2246 ...]
ProjectMAPI.getAllClassIds().then(console.log);
```
</p>
</details>


<details><summary>getClassById</summary>
<p>

```javascript
ProjectMAPI.getClassById(764).then(console.log);

// Or, use multiple ids to get multiple values in response, seperated by comma
ProjectMAPI.getClassById(764, 9686).then(console.log);
```
</p>
</details>

<details><summary>getAllNpcIds</summary>
<p>

```javascript
// Returns a list of all ID's. E.G [29, 47, 54 ...]
ProjectMAPI.getAllNpcIds().then(console.log);
```
</p>
</details>

<details><summary>getNPCById</summary>
<p>

```javascript
ProjectMAPI.getNPCById(29).then(console.log);

// Or, use multiple ids to get multiple values in response, seperated by comma
ProjectMAPI.getNPCById(29, 3421).then(console.log);
```
</p>
</details>