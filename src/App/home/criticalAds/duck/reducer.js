import { setPopupVisibility,
    fetchCriticalAdsSuccess,
    fetchCriticalAdsFailure,
    fetchCriticalAdsInProgress} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    items: [{
        "id": 483,
        "ad_title": "Services Temporarily Unavailable in Tamil Nadu",
        "ad_type": "image",
        "active_from": "2020-06-27T17:40:00+05:30",
        "city": "Kolkata",
        "city_id": 15,
        "active_to": "2020-07-31T23:59:00+05:30",
        "collection_name": "",
        "app_type": "HipBar-Delivery",
        "url": "",
        "high_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_900/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "low_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_400/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "listing_order": 1,
        "is_critical": true,
        "description": "Services unavailable today due to Central Government Election 2019 in Tamil Nadu",
        "disclaimer": "Disclaimer:  Services will resume tomorrow Applicable to all HipBar-affiliated retail stores"
    },{
        "id": 484,
        "ad_title": "TITLE 2",
        "ad_type": "image",
        "active_from": "2020-06-27T17:40:00+05:30",
        "city": "Kolkata",
        "city_id": 15,
        "active_to": "2020-07-31T23:59:00+05:30",
        "collection_name": "",
        "app_type": "HipBar-Delivery",
        "url": "",
        "high_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_900/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "low_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_400/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "listing_order": 1,
        "is_critical": true,
        "description": "2: Get your favourite drinks home delivered!",
        "disclaimer": "2: Drink responsibly"
    },{
        "id": 485,
        "ad_title": "TITLE 3",
        "ad_type": "image",
        "active_from": "2020-06-27T17:40:00+05:30",
        "city": "Kolkata",
        "city_id": 15,
        "active_to": "2020-07-31T23:59:00+05:30",
        "collection_name": "",
        "app_type": "HipBar-Delivery",
        "url": "",
        "high_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_900/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "low_res_image": "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_400/v1593257547/Odisha%20-%20Bubaneshwar/Ciritcal_Ad_-_Rs.49.png",
        "listing_order": 1,
        "is_critical": true,
        "description": "3: Get your favourite drinks home delivered!",
        "disclaimer": "3: Drink responsibly"
    }],
    isViewed: true,
    criticalAdsFetchState: "inProgress"
}

const criticalAdsReducer = createReducer(initialState, {
    [setPopupVisibility]: (state) => ({...state, isViewed: false}),
    [fetchCriticalAdsSuccess]: (state, action) => ({...state, items: action.payload.ads, criticalAdsFetchState: "success"}),
    [fetchCriticalAdsFailure]: (state) => ({...state, criticalAdsFetchState: "failed"}),
    [fetchCriticalAdsInProgress]: (state) => ({...state, criticalAdsFetchState: "inProgress"}),

})

export { criticalAdsReducer };
