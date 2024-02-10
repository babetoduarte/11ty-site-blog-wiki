// Require the luxon package
const { DateTime } = require("luxon");

// Define a function that converts the standard JSDate into a nicer format
// MM/DD/YYYY HH:MM:SS TZ -> <day_of_the_week>, <month>, <day>, <year>
module.exports = (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
};
