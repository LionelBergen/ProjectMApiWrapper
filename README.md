FLYFF Project M API Wrapper
---------------------------  

# Usage / Quick Start
```
import ProjectMAPI from './Project_M_API/ProjectMApi.js';
const projectMApi = new ProjectMAPI();

// get all class ID's and log them
projectMApi.getAllClassIds().then(console.log);
```

# Methods

<details><summary>getAllClassIds</summary>
<p>   

```javascript
// Returns a list of all ID's. E.G [764, 2246 ...]
projectMApi.getAllClassIds().then(console.log);
```
</p>
</details>


<details><summary>getClassById</summary>
<p>

```javascript
projectMApi.getClassById(764).then(console.log);
```
</p>
</details>