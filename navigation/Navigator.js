import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PrePost from '../screens/PrePost';
import Survey from '../screens/Survey';
import MainPage from '../screens/MainPage';
import Education from '../screens/Education';
import Progress from '../screens/Progress';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Navigator = createStackNavigator(
  {
    LoginScreen: Login,
    SignupScreen: Signup,
    SurveyScreen: Survey,
    MainScreen:  MainPage,
    PrePostScreen: PrePost,
    EducationScreen:Education,
    ProgressScreen: Progress
  }
);

export default createAppContainer(Navigator);
