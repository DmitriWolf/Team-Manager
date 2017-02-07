let mongoose = require('mongoose');
var Entry = require('../src/models/entry');
/*
 * GET /entry route to retrieve all the entries.
 */
function getEntries(req, res) {
    //Query the DB and if no errors, send all the entries
    let query = Entry.find({});
    query.exec((err, entries) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(entries);
    });
}

/*
 * POST /entry to save a new entry.
 */
function postEntry(req, res) {
    //Creates a new entry
    var newEntry = new Entry(req.body);
    //Save it into the DB.
    newEntry.save((err,entry) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Entry successfully added!", entry });
        }
    });
}

/*
 * GET /entry/:id route to retrieve a entry given its id.
 */
function getEntry(req, res) {
    Entry.findById(req.params.id, (err, entry) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(entry);
    });     
}

/*
 * DELETE /entry/:id to delete a entry given its id.
 */
function deleteEntry(req, res) {
    Entry.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Entry successfully deleted!", result });
    });
}

/*
 * PUT /entry/:id to updatea a entry given its id
 */
function updateEntry(req, res) {
    Entry.findById({_id: req.params.id}, (err, entry) => {
        if(err) res.send(err);
        Object.assign(entry, req.body).save((err, entry) => {
            if(err) res.send(err);
            res.json({ message: 'Entry updated!', entry });
        }); 
    });
}

//export all the functions
module.exports = { getEntries, postEntry, getEntry, deleteEntry, updateEntry };