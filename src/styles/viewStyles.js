import { Dimensions } from 'react-native';
import * as Colors from './colors';

const windowWidth = Dimensions.get('window').width;

const viewStyles = {
  rowSpaceBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  listSeparator: {
    flex: 1,
    marginVertical: 16,
    height: 2,
    backgroundColor: Colors.GRAY
  },

  cellImage: {
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
    width: windowWidth
  }
};

export default viewStyles;
