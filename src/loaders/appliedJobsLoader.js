import { getAppliedJobs } from "../utilities/fakedb";

const appliedJobLoader = async () =>{
const loadedJobs = await fetch('jobs.json');
const jobs = await loadedJobs.json();
const storedJob = getAppliedJobs();
console.log(storedJob);
const appliedJob =[];
for (const id in storedJob){
    const addedJob = jobs.find(jb => jb.id === id);
    if(addedJob){
        const quantity = storedJob[id];
        addedJob.quantity = quantity;
        appliedJob.push(addedJob);
        
    }
}
return appliedJob;
}

export default appliedJobLoader;