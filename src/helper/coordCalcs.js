 
 function islocationInRatio(lat1, lon1, lat2, lon2, ratioKm) {
    return getDistanceInKmFromCoordinates(lat1, lon1, lat2, lon2) <= ratioKm 
 }

function getDistanceInKmFromCoordinates(lat1, lon1, lat2, lon2) {
    if(lat1 === lat2 && lon1 === lon2) return 0 // The formula would return NAN if cordinates are the same
    let φ1 = deg2rad(lat1), φ2 = deg2rad(lat2), Δλ = deg2rad(lon2-lon1), R = 6371;
    return Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}
export {islocationInRatio, getDistanceInKmFromCoordinates}