import * as types from './ActionTypes.js';

export function setFriend(friend) {
  console.log('FRIEND IS THIS ONE *****************', friend);
  return (dispatch, getState) => {
    let apiUrl = 'http://107.170.233.162:1337/api/users/' + friend.id + '/pins';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data is: ', data.records[0]._fields[0].properties.location);
      var markers = [];
      for (var i = 0; i < data.records.length; i++) {
        markers.push({
          id: i,
          location: {
            latitude: JSON.parse(data.records[i]._fields[0].properties.location).latitude,
            longitude: JSON.parse(data.records[i]._fields[0].properties.location).longitude,
          },
          mediaURL: data.records[i]._fields[0].properties.mediaUrl,
          likes: 69420,
          description: data.records[i]._fields[0].properties.description,
          createdAt: data.records[i]._fields[0].properties.createdAt,
          pinColor:  '#4286f4',
        });
      }
      dispatch(setFriendMarkers(markers, friend));
    })
    .catch((error) => {
      console.warn(error);
    }).done();
  };
}

export function setFriendMarkers(markers, friend) {
  return {
    type: types.SET_FRIEND_MARKERS,
    friend,
    markers,
  };
}

export function toggleViewReady() {
  return {
    type: types.TOGGLE_VIEW_READY,
  };
}