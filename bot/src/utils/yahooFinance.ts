import YahooFinance from "yahoo-finance2";

// yahoo-finance2 v3+ requires an instance rather than a default singleton.
export default new YahooFinance({ suppressNotices: ["yahooSurvey"] });
