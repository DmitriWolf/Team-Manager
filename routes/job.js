let mongoose = require('mongoose');
var Job = require('../src/models/job');
/*
 * GET /job route to retrieve all the jobs.
 */
function getJobs(req, res) {
    //Query the DB and if no errors, send all the jobs
    let query = Job.find({});
    query.exec((err, jobs) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(jobs);
    });
}

/*
 * JOB /job to save a new job.
 */
function postJob(req, res) {
    //Creates a new job
    var newJob = new Job(req.body);
    //Save it into the DB.
    newJob.save((err,job) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Job successfully added!", job });
        }
    });
}

/*
 * GET /job/:id route to retrieve a job given its id.
 */
function getJob(req, res) {
    Job.findById(req.params.id, (err, job) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(job);
    });     
}

/*
 * DELETE /job/:id to delete a job given its id.
 */
function deleteJob(req, res) {
    Job.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Job successfully deleted!", result });
    });
}

/*
 * PUT /job/:id to updatea a job given its id
 */
function updateJob(req, res) {
    Job.findById({_id: req.params.id}, (err, job) => {
        if(err) res.send(err);
        Object.assign(job, req.body).save((err, job) => {
            if(err) res.send(err);
            res.json({ message: 'Job updated!', job });
        }); 
    });
}

//export all the functions
module.exports = { getJobs, postJob, getJob, deleteJob, updateJob };