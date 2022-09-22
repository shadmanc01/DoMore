const CLIENT_ID = '296446577877-bop1hk57nefj8i1m7mdvrcg8hiuo124r.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBzeHSo7BoI-fI8bvY35jn7-7vdSNiQCkw';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
let tokenClient;
let gapiInited = false;
let gisInited = false;
let curDay = new Date().getDate();
let setDate = document.getElementById("date-num");
let curWDay = new Date().getDay();
if (curWDay === 0) curWDay = 'Sunday'
if (curWDay === 1) curWDay = 'Monday'
if (curWDay === 2) curWDay = 'Tuesday'
if (curWDay === 3) curWDay = 'Wednesday'
if (curWDay === 4) curWDay = 'Thursday'
if (curWDay === 5) curWDay = 'Friday'
if (curWDay === 6) curWDay = 'Saturday'
let setWDay = document.getElementById("date-day");
let cardplan = document.getElementById('cardinnertext')
let intromessage = document.getElementById('intromessage')

document.getElementById('authorize_button').style.visibility = 'hidden';

function gapiLoaded() {
    gapi.load('client', intializeGapiClient);
}


async function intializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}


function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited = true;
    maybeEnableButtons();
}


function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('authorize_button').style.visibility = 'visible';
    }
}


function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        document.getElementById('authorize_button').style.visibility = 'hidden';
        // document.getElementById('authorize_button').innerText = 'Refresh';
        await listUpcomingEvents();
    };
    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        tokenClient.requestAccessToken({ prompt: '' });
    }
}

async function listUpcomingEvents() {
    let response;
    try {
        const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
        };
        response = await gapi.client.calendar.events.list(request);
    } catch (err) {
        document.getElementById('content').innerText = err.message;
        return;
    }

    const events = response.result.items;
    if (!events || events.length == 0) {
        document.getElementById('content').innerText = 'No events found.';
        return;
    }
    document.getElementById('content').innerText = '';
    document.getElementById('eventsummary').innerText = events[0].summary;
    let startTime = new Date(events[0].originalStartTime.dateTime);
    let endTime = new Date(events[0].end.dateTime);
    document.getElementById('time').innerText = `${startTime.toLocaleTimeString('en-US')} - ${endTime.toLocaleTimeString('en-US')}`;
    setDate.innerText = curDay;
    setWDay.innerText = curWDay;
    console.log(events[0].summary);
    console.log(events);
    cardplan.innerText = 'Join Meeting'
    cardplan.href = events[0].hangoutLink;
    intromessage.innerText = '';
    console.log(events);
}


