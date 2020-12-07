import * as Colors from './colors';

const viewStyles = {
  flex: {
    flex: 1
  },

  shadow: {
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: 3
    }
  },

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
  },

  searchInputField: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    marginHorizontal: 8,
    borderRadius: 16,
    backgroundColor: Colors.WHITE,
    marginBottom: 8
  },

  noSearchedHeadlines: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 32
  },

  languagesCell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
};

export default viewStyles;
