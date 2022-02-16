import { api } from "../../services/api";

const rollBackReward = async (rewardId) => {
    try {
        const response = await api.put("/transaction-history/rollback/reward/" + rewardId);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const rollBackPurchase = async (purchaseId) => {
    try {
        const response = await api.put("/transaction-history/rollback/purchase/" + purchaseId);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}


const getActivity = async (companyId, offset = 13, page = 1, initialDate = "", finalDate = "", filter = "") => {
    try {
        const response = await api.get("/transaction-history/company-activities/" + companyId + "?offset=" + offset + "&page=" + page + "&initialDate=" + initialDate + "&finalDate=" + finalDate + "&filter=" + filter);
        return response.data;
    } catch (err) {
        console.log("Error: ", err);
        return null;
    }
}

const getFilteredActivity = async (companyId, storeId, initialDate, finalDate, offset = 13, page = 1) => {
    try {
        const response = await api.get("/transaction-history/company-activities/" + companyId+ "?store=" + storeId + "&initialDate=" + initialDate + "&finalDate=" + finalDate + "&offset=" + offset + "&page=" + page);
        return response.data;
    } catch (err) {
        console.log("Error: ", err);
        return null;
    }
}

const getSomeTotals = async (companyId) => {
    try {
        const response = await api.get("/analytics/company/activities/" + companyId);
        return response.data;
    } catch (err) {
        console.log("Error: ", err);
        return null;
    }
}

module.exports = { rollBackReward, rollBackPurchase, getActivity, getSomeTotals, getFilteredActivity };