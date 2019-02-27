const pad = require('pad-right');

const typeToListItem = ({description, value}) => {
  return {
    name: pad(value + ':', 12, ' ') + description,
    value
  }
};

exports.createQuestion = (state) => {
  const {config} = state;
  const question = {
    choices: config.releaseList.map((release) => typeToListItem(config.releases[release])),
    message: 'Select the release type of change that you\'re committing:',
    name: 'release',
    type: 'list'
  };

  return question;
};
