import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import e = require('express');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));
main.use('/api/v1', app);

const sensorsCollection = 'sensors';
export const webApi = functions.https.onRequest(main);

app.patch('/sensor/:sensorId', async(req, res) => {
    try {
        // await firebaseHelper.firestore.updateDocument(db, sensorsCollection, req.params.sensorId, req.body);
        const previous = req.body;
        const payload = Object.assign(previous, {
            createdOn: admin.firestore.FieldValue.serverTimestamp()
        });
        await db.collection(sensorsCollection).doc(req.params.sensorId).update(payload);
        res.status(200).send('Update Success');
    } catch (error) {
        res.status(204).send('Patch Error');
    }
});

app.get('/sensor/:sensorId', async(req, res) => {
    let data;
    try {
        const ref = db.collection(sensorsCollection).doc(req.params.sensorId);
        const doc = await ref.get();
        if(!doc.exists) {
            data = 'No such file in server';
        } else {
            data = doc.data();
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(204).send('GET Error');
    }
});


// SSID: Univision_C819
// PASS: PASSWORD
// https://iot-sensors-178ba.web.app/api/v1/sensor/API_KEY


// export const readRemoteSensor = functions.region('asia-east2').https.onCall(async (data, context) => {
//     const temperature = data["temp"];
//     const humidity = data["humid"];
//     const createdOn = data["createdOn"];

//     console.log(`Received data: ${humidity}, ${temperature}`);
//     const payload = {
//         temp: temperature,
//         humid: humidity,
//         createdOn: createdOn
//     }
//     const ref = db.collection('sensors');

//     ref.doc().set(payload).then(async doc => {
//         console.log(`Response: ${doc}`);
//     }).catch(err => {
//         console.log(`${err.code}: ${err.message}`);
//     });

//     return { success: true };
// })



// URL link to update data in firestore
// /api/v1/sensors/API_KEY
