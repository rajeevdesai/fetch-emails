'use strict';
const emailRegex = require('emails-regex');
const vpaRegex = require('vpa-regex');

module.exports = (text, opts) => {
  const options = opts || {};
  const emails = text.match(emailRegex());
  const vpas = text.match(vpaRegex());

  if (options.fetchVPA) {
    return new Set(vpas ? vpas.map(vpa => vpa.trim()) : []);
  }
  return new Set(emails ? emails.map(email => email.trim()) : []);
};
