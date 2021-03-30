/**
 * ODOC Bot
 * - Github commit check chat bot used in ODOC (One Day One Commit)
 * 
 * @author Chanmi Kim
 */
const scriptName = "ODOC.js";
const Jsoup = org.jsoup.Jsoup;

/**
 * Chatbot Message Response
 * 
 * @param {string} room 
 * @param {string} msg 
 * @param {boolean} sender 
 * @param {void} isGroupChat 
 * @param {boolean} replier 
 * @param {string} imageDB 
 * @param {string} packageName 
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    let githubId = "Chanmi-Kim";
    let nickName = "devmei";
    let searchDate = "2021-03-30";
    
    if (msg === "/check") {
        const doc = Jsoup.connect("https://github.com/" + githubId).get();

        let allContribution = doc.select(".js-calendar-graph-svg g g rect");
        let commitCount = allContribution.select("[data-date='" + searchDate + "']").attr("data-count");
        
        let result = nickName + " : " + commitCount + " commit";
        
        replier.reply(result);
    }
}
