import * as Colors from './colors';
import * as Font from './fonts';

const textStyles = {
  font: Font.FONT_FAMILY,

  errorTitle: {
    color: Colors.WHITE,
    fontSize: Font.FONT_SIZE_16,
    fontWeight: Font.FONT_WEIGHT_600
  },

  errorInfo: {
    color: Colors.WHITE,
    fontSize: Font.FONT_SIZE_14
  },

  goToLink: {
    color: Colors.BLUE,
    fontSize: Font.FONT_SIZE_14
  },

  clickableText: {
    fontSize: Font.FONT_SIZE_32,
    fontWeight: Font.FONT_WEIGHT_600
  },

  topHeadlinesCellTitle: {
    fontWeight: Font.FONT_WEIGHT_600,
    fontSize: Font.FONT_SIZE_20,
    marginBottom: 24
  },

  topHeadlinesCellDescription: {
    fontSize: Font.FONT_SIZE_14
  },

  contentTitle: {
    fontWeight: Font.FONT_WEIGHT_600,
    fontSize: Font.FONT_SIZE_28,
    marginBottom: 16
  },

  contentInfo: {
    fontWeight: Font.FONT_WEIGHT_600,
    fontSize: Font.FONT_SIZE_12
  },

  contentDescription: {
    fontWeight: Font.FONT_WEIGHT_500,
    fontSize: Font.FONT_SIZE_18
  },

  contentAuthor: {
    textAlign: 'right',
    marginTop: 8,
    marginRight: 16,
    fontSize: Font.FONT_SIZE_12,
    fontWeight: Font.FONT_WEIGHT_600
  },

  categoriesHeader: {
    fontSize: Font.FONT_SIZE_28,
    fontWeight: Font.FONT_WEIGHT_600
  },

  categoryCellTitle: {
    fontWeight: Font.FONT_WEIGHT_600,
    fontSize: Font.FONT_SIZE_20,
    paddingHorizontal: 8,
    textAlign: 'center',
    marginBottom: 24
  },

  categoryCellDescription: {
    fontSize: Font.FONT_SIZE_14,
    paddingHorizontal: 16
  }
};

export default textStyles;
