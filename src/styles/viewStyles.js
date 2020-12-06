import * as Colors from './colors';

const viewStyles = {
  error: {
    backgroundColor: Colors.RED,
    padding: 8
  },

  rowSpaceBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  clickableTextContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 8
  },

  topHeadlineslistSeparator: {
    flex: 1,
    marginVertical: 16,
    height: 2,
    backgroundColor: Colors.GRAY
  },

  topHeadlinesCellImage: {
    height: 150,
    marginBottom: 16
  },

  contentSeparator: {
    flexDirection: 'row',
    height: 2,
    backgroundColor: Colors.GRAY,
    marginBottom: 16
  },

  contentImage: {
    height: 200,
    width: '100%',
    marginBottom: 16
  },

  contentLink: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 32,
    alignItems: 'flex-end',
    marginBottom: 32
  },

  categoriesHeader: {
    backgroundColor: Colors.GRAY,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16
  },

  categoryCellImage: {
    height: 150,
    width: '100%'
  },

  categoriesFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginVertical: 8
  }
};

export default viewStyles;
