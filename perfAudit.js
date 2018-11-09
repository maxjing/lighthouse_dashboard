const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fse = require("fs-extra");
const ReportGenerator = require("lighthouse/lighthouse-core/report/report-generator");
const lighthouse_config = require("./config/lighthouse_config");

const url = "https://www.realtor.com";

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags })
    .then(chrome => {
      opts.port = chrome.port;
      return lighthouse(url, opts, config).then(results => {
        delete results.artifacts;
        return chrome.kill().then(() => results);
      });
    });
}

const opts = {
  chromeFlags: ["--show-paint-rects"]
};

launchChromeAndRunLighthouse(url, opts, lighthouse_config).then(results => {
  const jsonReport = JSON.stringify(results, null, 2);
  const htmlReport = ReportGenerator.generateReportHtml(results);
  fse.ensureDirSync("./lighthouse/reports");
  fse.writeFileSync("./lighthouse/reports/report.json", jsonReport);
  fse.writeFileSync("./lighthouse/reports/report.html", htmlReport);
});
