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
    let detailsData = '';
    if (profile?.d_highlightedFields?.s_snippet) {
      const { value, matchedSubstrings } = profile.d_highlightedFields.s_snippet;
      detailsData = Formatter.highlightField(value, matchedSubstrings);
    } else if (profile.s_snippet) {
      detailsData = profile.s_snippet;
    }

    return {
      title: profile.name, // The header text of the card
      url: profile.website || profile.name, // If the card title is a clickable link, set URL here
      target: '_top', // If the title's URL should open in a new tab, etc.
      // image: '', // The URL of the image to display on the card
      // altText: '', // The alternate text for the image
      titleEventOptions: this.addDefaultEventOptions(),
      subtitle: profile.externalArticleUpdateDate ? `Last Updated on ${profile.externalArticleUpdateDate}` : '', // The sub-header text of the card
      details: detailsData, // The text in the body of the card
      // The primary CTA of the card
      CTA1: {
        label: (profile.c_primaryCTA ? profile.name : null), // The CTA's label
        iconName: 'chevron', // The icon to use for the CTA
        url: Formatter.generateCTAFieldTypeLink(profile.name), // The URL a user will be directed to when clicking
        target: '_top', // Where the new URL will be opened
        eventType: 'CTA_CLICK', // Type of Analytics event fired when clicking the CTA
        eventOptions: this.addDefaultEventOptions(),
        // ariaLabel: '', // Accessible text providing a descriptive label for the CTA
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