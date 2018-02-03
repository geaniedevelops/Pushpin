import { AsyncStorage } from 'react-native';

export default class Persistent extends Component {
  componentDidMount() {
    this._signIn();
  }
}
