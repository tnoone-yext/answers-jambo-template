{{> cards/card_component componentName='databasecard' }}

class databasecardCardComponent extends BaseCard['databasecard'] {
  constructor(config = {}, systemConfig = {}) {
    super(config, systemConfig);
  }

  /**
   * This returns an object that will be called `card`
   * in the template. Put all mapping logic here.
   *
   * @param profile profile of the entity in the card
   */
  dataForRender(profile) {
    const linkTarget = AnswersExperience.runtimeConfig.get('linkTarget') || '_top';
    
    return {
      title: profile.name, // The header text of the card
      url: profile.id, // If the card title is a clickable link, set URL here
      target: linkTarget, // If the title's URL should open in a new tab, etc.
      // image: '', // The URL of the image to display on the card
      // altText: '', // The alternate text for the image
      titleEventOptions: this.addDefaultEventOptions(),
      // subtitle: '', // The sub-header text of the card
      details: profile.description, // The text in the body of the card
      // If the card's details are longer than a certain character count, you can truncate the
      // text. A toggle will be supplied that can show or hide the truncated text.
      showMoreDetails: {
        showMoreLimit: 750, // Character count limit
        showMoreText: 'Show more', // Label when toggle will show truncated text
        showLessText: 'Show less' // Label when toggle will hide truncated text
      }
    };
  }

  /**
   * The template to render
   * @returns {string}
   * @override
   */
  static defaultTemplateName (config) {
    return 'cards/databasecard';
  }
}

ANSWERS.registerTemplate(
  'cards/databasecard',
  {{{stringifyPartial (read 'cards/databasecard/template') }}}
);
ANSWERS.registerComponentType(databasecardCardComponent);
